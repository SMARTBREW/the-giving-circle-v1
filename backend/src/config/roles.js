const allRoles = {
  user: ['read-profile', 'update-profile'],
  admin: [
    'read-profile',
    'update-profile',
    'create-employees',
    'read-employees',
    'update-employees',
    'delete-employees',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
