const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Modelo de loja
// id, nome, email, telefone, FK de usuário
const Store = sequelize.define(
  "Store",
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
    phone: {
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

Store.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Store;