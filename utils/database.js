const Sequelize = require('sequelize');

const DB_NAME = 'nodetodo',
      USER_NAME = 'root',
      PASSWORD = 'VasekGG04_';




const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
