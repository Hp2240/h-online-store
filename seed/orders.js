const db = require('../db')
const Order = require('../models/order')
const Client = require('../models/client')
const Product = require('../models/product')
const company = require('../models/order')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//   const companies = [
//     {
//       name: 'Company A',
//       contact: '1234567890',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1hAEWE9yGutFUQHIf3pyyKZMlrVLBc6NSw&usqp=CAU',
//       description: 'This is Company A. Our company is ...',
//       founded: '1994'
//     },
//     {
//       name: 'Company B',
//       contact: '2345678901',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHycZOHxIuuimUYIApggJ17SmP9szdXgPziQ&usqp=CAU',
//       description: 'This is Company B. Our company is ...',
//       founded: '1998'
//     },
//     {
//       name: 'Company C',
//       contact: '3456789101',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAj_ln6qoU-fjffZpgj9DC_q0oRmWFIb5A9Q&usqp=CAU',
//       description: 'This is Company C. Our company is ...',
//       founded: '2000'
//     },
//     {
//       name: 'Company D',
//       contact: '4567891234',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQev08-PoiGn0tDqBC1P1PzOClBZ5XP68Lc9g&usqp=CAU',
//       description: 'This is Company D. Our company is ...',
//       founded: '2002'
//     },
//     {
//       name: 'Company E',
//       contact: '5678910123',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1hAEWE9yGutFUQHIf3pyyKZMlrVLBc6NSw&usqp=CAU',
//       description: 'This is Company E. Our company is ...',
//       founded: '2003'
//     },
//     {
//       name: 'Company F',
//       contact: '6789101234',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu8Jw7D8H9f6Xo20XqlEQCV7lTIQWAk5XZQ&usqp=CAU',
//       description: 'This is Company F. Our company is ...',
//       founded: '2005'
//     },
//     {
//       name: 'Company G',
//       contact: '7891012345',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6R9TD9U_hcA-pQe2LZ61YaQKW94aL7KY9Cw&usqp=CAU',
//       description: 'This is Company G. Our company is ...',
//       founded: '2007'
//     },
//     {
//       name: 'Company H',
//       contact: '8910123456',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-hyiHNZ4GntF044fISrLidxqPnnQcV_p3A&usqp=CAU',
//       description: 'This is Company H. Our company is ...',
//       founded: '2010'
//     },
//     {
//       name: 'Company I',
//       contact: '9101234567',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOv2_PoRxiB9kbuHlilCe0rNNtU0MCbcGg0A&usqp=CAU',
//       description: 'This is Company I. Our company is ...',
//       founded: '2013'
//     }
//   ]

//   await company.insertMany(companies)
//   console.log('Created some companies')
// }
const run = async () => {
  await main()
  db.close()
}

run()
// const main = async () => {
//   const denimPants = await Product.find({ name: 'denim pants' })
//   const dressA = await Product.find({ name: 'a dress' })
//   const olivia = await Client.find({ name: 'Olivia' })
//   const emma = await Client.find({ name: 'Emma' })
//   const mary = await Client.find({ name: 'Mary' })

//   const orders = [
//     {
//       product_id: denimPants[0]._id,
//       client_id: olivia[0]._id
//     },
//     {
//       product_id: denimPants[0]._id,
//       client_id: emma[0]._id
//     },
//     {
//       product_id: dressA[0]._id,
//       client_id: mary[0]._id
//     }
//   ]

//   await Order.insertMany(orders)
//   console.log('Created some orders!')
// }
