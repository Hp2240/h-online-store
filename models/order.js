const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
  {
    product_id: { type: Schema.Types.ObjectId, ref: 'product_id' },
    client_id: { type: Schema.Types.ObjectId, ref: 'client_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('orders', Order)
