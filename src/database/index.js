const Sequelize = require('sequelize')
const config = require('../config/database')

const connection = new Sequelize(config)

module.exports = connection
