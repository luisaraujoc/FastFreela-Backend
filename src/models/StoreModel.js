const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Store = sequelize.define(
    'store',
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
        active: {
            type: DataTypes.TINYINT,
            defaultValue: 1,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        legalEntity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'legal_entity',
                key: 'id'
            }
        },
    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'store'
    }
);

module.exports = Store;