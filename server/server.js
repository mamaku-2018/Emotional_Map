const path = require('path')
const express = require('express')
const mapRoutes = require('./routes/mapRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/home', mapRoutes)

module.exports = server
