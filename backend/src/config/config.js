const dotenv = require('dotenv');
const path = require('path');
const Joi = require('@hapi/joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(4000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(15).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(7).description('days after which refresh tokens expire'),
    REFRESH_JWT_SECRET: Joi.string().required().description('JWT refresh secret key'),
    SMTP_HOST: Joi.string().allow('').description('server that will send the emails'),
    SMTP_PORT: Joi.number().default(587).description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().allow('').description('username for email server'),
    SMTP_PASSWORD: Joi.string().allow('').description('password for email server'),
    EMAIL_FROM: Joi.string().allow('').description('the from field in the emails sent by the app'),
    AWS_ACCESS_KEY_ID: Joi.string().allow(''),
    AWS_SECRET_ACCESS_KEY: Joi.string().allow(''),
    AWS_REGION: Joi.string().allow(''),
    AWS_S3_BUCKET: Joi.string().allow(''),
    RABBITMQ_URL: Joi.string().allow(''),
    FRONTEND_ORIGIN: Joi.string().default('http://localhost:3000'),
    ENCRYPTION_KEY: Joi.string().allow(''),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      maxPoolSize: 10,
      minPoolSize: 2,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    refreshSecret: envVars.REFRESH_JWT_SECRET,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
  aws: {
    accessKeyId: envVars.AWS_ACCESS_KEY_ID,
    secretAccessKey: envVars.AWS_SECRET_ACCESS_KEY,
    region: envVars.AWS_REGION,
    bucket: envVars.AWS_S3_BUCKET,
  },
  rabbitmq: {
    url: envVars.RABBITMQ_URL,
  },
  cors: {
    origin: [
      envVars.FRONTEND_ORIGIN,
      'http://localhost:3000',
      'http://localhost:3001',
    ],
  },
  encryptionKey: envVars.ENCRYPTION_KEY,
};
