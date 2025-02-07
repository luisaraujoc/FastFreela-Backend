const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const LegalEntitiesModel = sequelize.define(
    'LegalEntities',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        corporateName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fantasyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stateRegistration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        createdAt: true,
        updatedAt: true,
        tableName: 'legalentities',
    }
);

module.exports = LegalEntitiesModel;