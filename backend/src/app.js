const http = require('http');
const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const { errorConverter, errorHandler } = require('./middlewares/error');
const correlationIdMiddleware = require('./middlewares/correlationId');
const routes = require('./routes/v1');
const { Socket } = require('./models');
const logger = require('./config/logger');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: config.cors.origin,
    credentials: true,
  },
});

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(xss());
app.use(mongoSanitize());
app.use(compression());
app.use(correlationIdMiddleware);

app.use((req, res, next) => {
  req.setTimeout(30000);
  res.setTimeout(30000);
  next();
});

const corsOptions = {
  origin: config.cors.origin,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

app.use('/v1', routes);

app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).send({ code: httpStatus.NOT_FOUND, message: 'Not found' });
});

app.use(errorConverter);
app.use(errorHandler);

io.on('connection', async (socket) => {
  logger.info('Socket Connected');
  const token = socket.handshake.auth?.token || socket.handshake.headers?.token;
  const socketId = socket.handshake.auth?.socketId || socket.handshake.headers?.socketid || socket.id;

  if (!token) {
    return io.to(socketId).emit('joinEmpRoomResponse', 'Token unavailable');
  }

  try {
    const payload = jwt.verify(token, config.jwt.secret);
    if (typeof payload === 'object' && payload.id) {
      socket.join(socketId);
      await Socket.findOneAndUpdate(
        { userId: payload.id },
        { socketId, connected: true },
        { upsert: true },
      );
    }
  } catch (ex) {
    logger.error(ex);
    io.to(socketId).emit('joinEmpRoomResponse', 'An error occured while connecting to socket');
  }

  socket.on('disconnect', async () => {
    logger.info(`User disconnected ~> ${socketId}`);
    socket.leave(socketId);
    await Socket.findOneAndUpdate({ socketId }, { connected: false });
  });
});

module.exports = { app, server, io };
