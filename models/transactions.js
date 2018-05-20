'use strict';
module.exports = (sequelize, DataTypes) => {
  var transactions = sequelize.define('transactions', {
    plan: DataTypes.STRING,
    amount: DataTypes.STRING,
    paydate: DataTypes.DATE,
    email: DataTypes.STRING
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
  };
  return transactions;
};