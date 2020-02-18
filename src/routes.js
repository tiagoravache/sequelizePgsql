const { Router } = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')


const routes = Router()

routes.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.index)

 

module.exports = routes
