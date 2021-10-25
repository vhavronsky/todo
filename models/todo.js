const Sequelize = require('sequelize'),
      sequelize = require('../utils/database');

const todo = sequelize.define('Todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = todo;
