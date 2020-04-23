const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize('cowList', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Cow = sequelize.define('Cow', {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
})

// Cow.sync();

exports.Cow = Cow;

// let test = Cow.create({name: 'test', description: 'desc'})


// let Buttercup = Cow.create({name: 'Buttercup', description: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'})

// let Daisy = Cow.create({name: 'Daisy', description: 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.'})

// let Milkshake = Cow.create({name: 'Milkshake', description: 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.'})

// let Bessie = Cow.create({name: 'Bessie', description: 'a person\'s best or closest friend.'})

// let MooDonna = Cow.create({name: 'MooDonna', description: 'archaic : lady -- used as a form of respectful address.'})

// let MooLawn = Cow.create({name: 'MooLawn', description: 'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.'})