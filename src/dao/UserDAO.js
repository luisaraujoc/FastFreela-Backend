const { Model } = require('sequelize');
const User = require('../models/UserModel');

class UserDAO {
    async createUser(user) {
        const newUser = await User.create(user);
        return newUser;
    }

    async getUserById(id) {
        const user = await User.findByPk(id);
        return user;
    }

    async updateUser(user, id) {
        const updatedUser = await User.update(user, {
            where: {
                id: id,
            }
        });
        return updatedUser;
    }

    async deleteUser(id) {
        const deletedUser = await User.destroy({
            where: {
                id: id,
            }
        });
        return deletedUser;
    }
}