const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

module.exports = routes
