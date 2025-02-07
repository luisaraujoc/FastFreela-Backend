const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PeopleModel = sequelize.define(
    'People',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        motherName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cpf: {
            type: DataTypes.CHAR(11),
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'people',
    });

module.exports = PeopleModel;