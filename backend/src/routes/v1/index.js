const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const healthRoute = require('./health.route');

const router = express.Router();

router.use('/', healthRoute);
router.use('/auth', authRoute);
router.use('/users', userRoute);

module.exports = router;
