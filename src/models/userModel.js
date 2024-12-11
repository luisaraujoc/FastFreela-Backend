const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Person = require("./personModel");

// Modelo de usuário
const User = sequelize.define(
  "User",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      // enum roles: user, storeOwner, admin
      type: DataTypes.ENUM("user", "serviceProvider", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    // FK de PERSON
    personId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps: true, // Adiciona createdAt e updatedAt
  });

User.belongsTo(Person, { 
    foreignKey: "personId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE", 
});

module.exports = User;
