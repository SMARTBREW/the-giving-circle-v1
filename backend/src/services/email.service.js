const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');
const { ResetPassword, ApprovalMail } = require('../mail-templates');

const transport = nodemailer.createTransport(config.email.smtp);

if (config.env !== 'test' && config.email.smtp.host) {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server'));
}

const sendEmail = async (to, subject, html) => {
  logger.info('Email sent to ' + to);
  if (!config.email.smtp.host) {
    logger.warn('SMTP host not configured; skipping send');
    return;
  }
  const msg = { from: config.email.from, to, subject, html };
  await transport.sendMail(msg);
};

const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reset password';
  const resetPasswordUrl = `${config.cors.origin[0]}/set-new-password?token=${token}`;
  const html = ResetPassword(resetPasswordUrl);
  await sendEmail(to, subject, html);
};

const sendApprovalEmail = async (to, email, name, password) => {
  const subject = 'Welcome to The Giving Circle';
  const html = ApprovalMail(email, name, password);
  await sendEmail(to, subject, html);
};

module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendApprovalEmail,
};
