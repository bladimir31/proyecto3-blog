require('dotenv').config()

const config = {
    api:{
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },

    db: {
        develpment:{
            dialect: 'postgres',
            port: process.env.DB_PORT,
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            define: {
                timestamps: true, // se utiliza por defecto created at y uptaded at
                underscored: true,// convierte camelCase een snake_case
                underscoredAll: true

            }},
        test: {

        } , 
        
        production: {

        }

       /** }
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'root',
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME
    }*/ 
}}

module.exports = config
