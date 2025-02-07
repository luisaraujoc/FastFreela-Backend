const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const OrderServices = sequelize.define(
    'order_services',
    {
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'orders',
                key: 'id',
            }
        },
        serviceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'services',
                key: 'id',
            },
        },
        realizationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        realizationTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'order_services',
    }
);

module.exports = OrderServices;