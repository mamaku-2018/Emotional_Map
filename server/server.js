const path = require('path')
const express = require('express')
// Needs Name of route const companyRoutes = require('./routes/')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// serverSide routes we will be using
server.use('/api/v1/')

module.exports = server
