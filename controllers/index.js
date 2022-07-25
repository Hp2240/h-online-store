const Product = require('../models/product')
const Client = require('../models/client')
const Order = require('../models/order')

const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllProducts = async (req, res) => {
  console.log('this method is being called')
  try {
    const products = await Product.find()
    return res.status(201).json({
      products
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createClient = async (req, res) => {
  try {
    const client = await new Client(req.body)
    await client.save()
    return res.status(201).json({
      client
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createOrder = async (req, res) => {
  try {
    const order = await new Order(req.body)
    await order.save()
    return res.status(201).json({
      order
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
      return res.status(201).json({ product })
    }
    return res.status(404).send('Prodcut with the specified ID does not exists')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.status(201).json(product)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  createClient,
  createOrder,
  getProductById,
  updateProduct
}
