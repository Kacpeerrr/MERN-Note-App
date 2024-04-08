const express = require('express')
const app = express()
const { port } = require('./config')

const apiRouter = require('./router/api')
app.use('/', apiRouter)

app.listen(port, function (req, res) {
	console.log('Serwer słucha...http://localhost:3000' + port)
})
