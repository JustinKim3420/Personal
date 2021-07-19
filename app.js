const express = require('express')
const cors = require('cors')

const app = express()

if(process.env.NODE_ENV==='production'){
    app.use(express.static('build'))
}

app.use(express.json())
app.use(cors())

module.exports={
    app
}