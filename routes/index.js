const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

// products
router.get('/products', controllers.getAllProducts)
router.get('/products/:id', controllers.getProductById)
router.put('/products/:id', controllers.updateProduct)
router.delete('/products/:id', controllers.deleteProduct)

// clients
router.get('/clients', controllers.getAllClients)
router.post('/clients', controllers.createClient)
router.get('/clients/:id', controllers.getClientById)
router.put('/clients/:id', controllers.updateClient)
router.delete('/clients/:id', controllers.deleteClient)

// orders
router.get('/orders', controllers.getAllOrders)
router.post('/orders', controllers.createOrder)
router.put('/orders/:id', controllers.updateOrder)
router.delete('/orders/:id', controllers.deleteOrder)

module.exports = router
