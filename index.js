const express = require('express')
const bodyParser = require('body-parser')

const package = require('./package.json')
const { paymentRoutes } = require('./controllers')

const app = express()

app.use(bodyParser.json())

app.get('/', (_req, res) => {
	res.json({
		message: 'Welcome to MunchPay API',
		version: package.version,
	})
})

app.get('/ping', (_req, res) => {
	res.send('pong 🏓')
})

app.use('/api', paymentRoutes)

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
	if (err) {
		console.log(err)
		return res.status(500).send(err.message)
	} else {
		console.log('[INFO] Server Running on port:', port)
	}
})
