//Dependencies
const express = require('express')
const postsRouter = require('./posts/posts.router')
const db = require('./utils/database')

//Initial Configs
const app = express()

const config = require('./config')

app.use(express.json())

//Mostrar de manera informativa si la conexion es correcta
db.authenticate()
    .then(() => {
        console.log('Las credencialles son correctas')
    })
    .catch((err) => {
        console.log(err)
    })

db.sync() //Sincronizar base de datos con nuestros modelos definidos   
    .then(() => {
        console.log('Sincronizacion correcta')
    })
    .catch((err) => {
        console.log(err)
    })

//Recibir info del cliente
app.get('/', (req, res) => {
    res.json({
        message: 'OK!',
        routes: {
            posts: 'http://localhost:9001/api/v1/posts'
        }
    })
})

app.use('/api/v1', postsRouter)


app.listen(config.api.port, () => {
    console.log(`Server started at port ${config.api.port}`)
})

module.exports = app
