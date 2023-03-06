require('dotenv').config({ path: './config/.env' })

const express = require('express')
const app = express()

const userRoutes = require('./routes/userRoutes')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(() => 
        app.listen(process.env.PORT, () => {
            console.log(`server en marche sur le port ${ process.env.PORT}`)
        })
    )
    .catch( error => console.log(error))

    app.use(express.json())

    app.use('/api/users', userRoutes)
