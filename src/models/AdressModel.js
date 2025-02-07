const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AdressModel = sequelize.define(
    'Adress',
    {
        id: {},
        street: {},
        number: {},
        complement: {},
        district: {},
        city: {},
        state: {},
        zipCode: {},

    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'adresses',
    });

module.exports = AdressModel;