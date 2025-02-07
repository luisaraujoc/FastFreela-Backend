const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EventDatesModel = sequelize.define(
    'EventDates',
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
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        eventDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('scheduled', 'done', 'canceled'),
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'event_dates',
    }
);

module.exports = EventDatesModel;