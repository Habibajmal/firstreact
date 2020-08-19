
const mongoose=require('mongoose')

const cart_schema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:{
        type:Number,
        default:1,
    }

})

const cart=mongoose.model("cart",cart_schema)
module.exports=cart