const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('user', 'serviceProvider', 'admin'),
            defaultValue: 'user',
            allowNull: false
        },
        active: {
            type: DataTypes.TINYINT,
            defaultValue: 1,
            allowNull: false
        },
        personId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'person',
                key: 'id'
            }
        }
    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'users'
    }
);


module.exports = User;