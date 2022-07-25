const db = require('../db')
const Client = require('../models/client')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const clients = [
    {
      name: 'Olivia',
      email: 'olivia@gmail.com',
      address: '1111 abc st'
    },
    {
      name: 'Emma',
      email: 'emma@gmail.com',
      address: '2222 cde st'
    },
    {
      name: 'Mary',
      email: 'mary@gmail.com',
      address: '3333 efg st'
    }
  ]

  await Client.insertMany(clients)
  console.log('Created some clients!')
}
const run = async () => {
  await main()
  db.close()
}

run()
