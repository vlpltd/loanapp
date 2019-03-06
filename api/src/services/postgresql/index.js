const {
  createUser,
  getUsers,
  updateuser,
  deleteUser,

  getMembers,
  loginUser

} = require('./postgresqldb');

module.exports = {
  createUser,
  getUsers,
  updateuser,
  deleteUser,
  getMembers,
  loginUser
};
