const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const CancelattionReasonsModel = sequelize.define(
    'Cancelattion_Reasons',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: false,
        tableName: 'cancelattion_reasons',
    }
);

module.exports = CancelattionReasonsModel;