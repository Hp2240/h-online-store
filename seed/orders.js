const db = require('../db')
const Order = require('../models/order')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const orders = [
    {
      order_date: '06/11/2021'
    },
    {
      order_date: '06/22/2021'
    },
    {
      order_date: '02/22/2022'
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
