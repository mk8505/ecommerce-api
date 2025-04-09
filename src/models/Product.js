const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.FLOAT,
  quantity: DataTypes.INTEGER,
});

module.exports = Product;