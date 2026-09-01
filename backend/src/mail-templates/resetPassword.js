const ResetPassword = (resetPasswordUrl) => `
  <p>You requested a password reset for The Giving Circle.</p>
  <p><a href="${resetPasswordUrl}">Set a new password</a></p>
  <p>If you did not request this, you can ignore this email.</p>
`;

module.exports = ResetPassword;
