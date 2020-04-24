const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize('cowList', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// const sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL);

const Cow = sequelize.define('Cow', {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING
  }
})

Cow.sync();


exports.Cow = Cow;
