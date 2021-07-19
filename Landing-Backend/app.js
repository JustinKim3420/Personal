const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const connect = (databaseURL) => {
    if (process.env.ENVIRONMENT === 'test') {
        await mongoose.connect(databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }
}

const disconnect = () => {

}

const clearDatabase = () => {

}

const app = express()

app.use(express.json())
app.use(cors())

module.exports = {
    app
}