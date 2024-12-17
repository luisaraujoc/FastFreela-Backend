const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Modelo de pessoa
// id, nome, nomeMae, cpfCnpj, dataNascimento, email
const Person = sequelize.define(
  "Person",
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
    motherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpfCnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isCpfCnpj(value) {
          if (value.length === 11) {
            if (!/^\d{11}$/.test(value)) {
              throw new Error("CPF inválido");
            }
          } else if (value.length === 14) {
            if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value)) {
              throw new Error("CNPJ inválido");
            }
          } else {
            throw new Error("CPF/CNPJ inválido");
          }
        },
      },
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true, // Adiciona createdAt e updatedAt
  }
);

module.exports = Person;
