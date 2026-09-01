const ApprovalMail = (email, name, password) => `
  <p>Welcome to The Giving Circle, ${name}.</p>
  <p>Your account email is ${email}.</p>
  <p>A temporary password has been issued. Please sign in and change it.</p>
`;

module.exports = ApprovalMail;
