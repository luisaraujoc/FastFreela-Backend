const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrdersModel = sequelize.define(
    'Orders',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        store_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'processing', 'canceled', 'completed'),
            allowNull: false,
        },
        cancellationDeadline: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'orders',
    }
);

module.exports = OrdersModel;