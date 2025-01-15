const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projeto', 'projeto', 'projeto', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
module.exports = { sequelize };
