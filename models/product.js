const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    company_id: { type: Schema.Types.ObjectId, ref: 'company_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('products', Product)
