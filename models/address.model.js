const sequelize = require("./db");
const {DataTypes, Model } = require('sequelize');

class User_address extends Model {}

User_address.init(
  {
    // Model attributes are defined here
    city: {
      type: DataTypes.STRING,
      allowNull : false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User_address', // We need to choose the model name
    tableName: 'user_address',
    timestamps: false
  },
);

module.exports = User_address;