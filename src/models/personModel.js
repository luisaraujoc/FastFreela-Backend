const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Modelo de pessoa
// id, nome, cpf/cnpj, dataDeNascimento, email, FK de usuário (pode ser nulo, pessoas podem comprar sem ter cadastro, mas para comprar o programa vai criar o objeto pessoa) (Pessoa tem usuario, usuario pertence a pessoa)
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
