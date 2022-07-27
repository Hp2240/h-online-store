const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const Company = new Schema(
//   {
//     name: { type: String, required: true },
//     contact: { type: String, required: true },
//     image: { type: String, required: true },
//     description: { type: String, required: true },
//     founded: { type: String, required: true }
//   },
//   { timestamps: true }
// )
const Order = new Schema(
  {
    product_id: { type: Schema.Types.ObjectId, ref: 'product_id' },
    client_id: { type: Schema.Types.ObjectId, ref: 'client_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('orders', Order)

// module.exports = mongoose.model('companies', Company)
