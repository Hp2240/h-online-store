const db = require('../db')
const Order = require('../models/order')
const Client = require('../models/client')
const Product = require('../models/product')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const denimPants = await Product.find({ name: 'denim pants' })
  const dressA = await Product.find({ name: 'a dress' })
  const olivia = await Client.find({ name: 'Olivia' })
  const emma = await Client.find({ name: 'Emma' })
  const mary = await Client.find({ name: 'Mary' })

  const orders = [
    {
      product_id: denimPants[0]._id,
      client_id: olivia[0]._id
    },
    {
      product_id: denimPants[0]._id,
      client_id: emma[0]._id
    },
    {
      product_id: dressA[0]._id,
      client_id: mary[0]._id
    }
  ]

  await Order.insertMany(orders)
  console.log('Created some orders!')
}
const run = async () => {
  await main()
  db.close()
}

run()
