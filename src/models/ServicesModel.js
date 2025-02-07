const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Services = sequelize.define(
    'services',
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
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descRichText: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        avarageDuration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        estimatedDelivery: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'services'
    }
);

module.exports = Services;