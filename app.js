const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.static('build'))

if(process.env.NODE_ENV==='production'){
}

app.use(express.json())
app.use(cors())

module.exports={
    app
}