const { Sequelize } = require('sequelize')
const config = require('../config')

const db = new Sequelize(config.db.develpment)
    
    /**{
    dialect: 'postgres',
    host: config.db.host, //? Variable de entorno del host
    username: config.db.username, //? Variable de entorno del usuario
    password: config.db.password, //? Variable de entorno de la contraseña
    database: config.db.name //? Variable de entorno de la base de datos 
   
})**/

module.exports = db