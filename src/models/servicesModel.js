const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Modelo de serviço
// id, nome, descRichText, desc , preço, duraçaoMedia, FK de loja
const Service = sequelize.define(
  "Service",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descRichText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    averageDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Adiciona createdAt e updatedAt
  }
);

module.exports = Service;