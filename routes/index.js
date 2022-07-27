const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// products
router.get('/', (req, res) => res.send('This is root!'))
router.get('/products', controllers.getAllProducts)

// clients
router.get('/clients', controllers.getAllClients)

// orders
router.get('/orders', controllers.getAllOrders)
router.post('/orders', controllers.createOrder)
router.put('/orders/:id', controllers.updateOrder)
router.delete('/orders/:id', controllers.deleteOrder)

router.get('/products/:id', controllers.getProductById)
router.put('/products/:id', controllers.updateProduct)
router.delete('/products/:id', controllers.deleteProduct)

module.exports = router
