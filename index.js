const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')

require('./db/mongoose')

app.use(bodyParser.json())

app.use('/api/', apiRouter)

app.listen(port, function (req, res) {
	console.log('Serwer słucha...http://localhost:3000' + port)
})
