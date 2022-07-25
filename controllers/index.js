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

module.exports = {
  createProduct,
  getAllProducts,
  createClient,
  createOrder
}
