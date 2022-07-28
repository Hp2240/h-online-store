const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'product_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('clients', Client)
