const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");

let sequelize;

if (process.env.JAWSDB_MARIA_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL)
} else {
  sequelize = new Sequelize('cowList', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
}

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
