const db = require('../db')
const Product = require('../models/product')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      name: 'denim pants',
      price: '35',
      category: 'bottom',
      image:
        'http://g-use.com/web/product/medium/202205/846d45aa4bb66de41129fc1de7fcf79d.jpg'
    },
    {
      name: 'b t-shirt',
      price: '13',
      category: 'top',
      image:
        'http://g-use.com/web/product/medium/202205/25b978be1a4724b2834b67cde48d4001.jpg'
    },
    {
      name: 'a dress',
      price: '37',
      category: 'dress',
      image:
        'http://g-use.com/web/product/big/201905/e3d429d05c66a6f7e9fc2a4b8f735f92.jpg'
    }
  ]

  await Product.insertMany(products)
  console.log('Created some products!')
}
const run = async () => {
  await main()
  db.close()
}

run()
