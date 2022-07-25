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
        'http://g-use.com/web/product/medium/202207/1ada6eb466650ef73b0b277c6542f3e2.jpg'
    },
    {
      name: 'a pants',
      price: '17',
      category: 'bottom',
      image:
        'http://g-use.com/web/product/big/201905/e3d429d05c66a6f7e9fc2a4b8f735f92.jpg'
    },
    {
      name: 'b pants',
      price: '35',
      category: 'bottom',
      image:
        'http://g-use.com/web/product/big/201905/e3d429d05c66a6f7e9fc2a4b8f735f92.jpg'
    },
    {
      name: 'c top',
      price: '20',
      category: 'dress',
      image:
        'http://g-use.com/web/product/big/201905/e3d429d05c66a6f7e9fc2a4b8f735f92.jpg'
    },
    {
      name: 'c top',
      price: '16',
      category: 'top',
      image:
        'http://g-use.com/web/product/big/201905/e3d429d05c66a6f7e9fc2a4b8f735f92.jpg'
    },
    {
      name: 'e dress',
      price: '51',
      category: 'dress',
      image:
        'http://g-use.com/web/product/medium/202204/d0f5b333be11cf69f88aa116405c86a6.jpg'
    },
    {
      name: 'e top',
      price: '12',
      category: 'top',
      image:
        'http://g-use.com/web/product/medium/201905/9e29cf244b5fc985669714d422f7cb2c.jpg'
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
