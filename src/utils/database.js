const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '110549630-9', 
    database: 'movies_crud'

})

module.exports = db