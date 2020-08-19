var mongoose= require('mongoose');
const { string } = require('joi');

const productSchema = mongoose.Schema(
    {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    productimage: { type: String, required: true }
    }

);
 


  module.exports = mongoose.model('Product', productSchema);

