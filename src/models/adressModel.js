const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./userModel");

// Modelo de endereço
// id, rua, numero, complemento, bairro/distrito, cidade, estado, cep, FK de usuário, destinatário
const Adress = sequelize.define(
  "Adress",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        street: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        number: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        complement: {
        type: DataTypes.STRING,
        allowNull: true,
        },
        district: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        city: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        state: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    },
    {
        timestamps: true, // Adiciona createdAt e updatedAt
    }
);

Adress.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});

module.exports = Adress;