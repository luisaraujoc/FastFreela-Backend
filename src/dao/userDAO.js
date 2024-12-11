const User = require("../models/userModel");

class UserDAO {
  // getAllUsers
  async getAllUsers() {
    return User.findAll();
  }

  // getUserById
  async getUserById(id) {
    return User.findByPk(id);
  }

  // createUser
  async createUser(data) {
    return User.create(data);
  }

  // updateUser
  async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    return user.update(data);
  }

  // unactivateUser
  async unactivateUser(id) {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    return user.update({ active: false });
  }
}

module.exports = new UserDAO();