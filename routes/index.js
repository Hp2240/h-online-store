const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/products', controllers.getAllProducts)
router.get('/products/:id', controllers.getProductById)
router.put('/products/:id', controllers.updateProduct)

module.exports = router
