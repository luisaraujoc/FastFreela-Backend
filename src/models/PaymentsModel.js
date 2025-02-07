const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PaymentsModel = sequelize.define(
    'Payments',
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
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        paymentMethod: {
            type: DataTypes.ENUM('credit_card', 'debit_card', 'paypal', 'cash'),
            allowNull: false,
        },
        stutus: {
            type: DataTypes.ENUM('pending', 'completed', 'failed'),
            defaults: 'pending',
            allowNull: false,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'payments',
    }
);

module.exports = PaymentsModel;