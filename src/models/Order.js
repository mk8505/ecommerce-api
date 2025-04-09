const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Order = sequelize.define('Order', {
  productIds: DataTypes.ARRAY(DataTypes.INTEGER),
  totalAmount: DataTypes.FLOAT,
});

Order.belongsTo(User);

module.exports = Order;