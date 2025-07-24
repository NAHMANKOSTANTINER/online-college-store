const Sequelize = require('sequelize');
const config = require('../config/config.json');
const env = process.env.ENV || 'development';
const envDataObject = config[env];

const sequelize = new Sequelize(envDataObject.database, envDataObject.username, envDataObject.password, envDataObject);

module.exports ={
    sequelize
}