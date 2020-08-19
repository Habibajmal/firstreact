var express = require('express');
const Order=require('../../models/order')



var router = express.Router();






//get by date last 4 days

router.get('/fourdays',async function(req,res){

  let pro=await Order.aggregate([
    {$match: { 'Date':{
      $gte: new Date((new Date().getTime() - (30 * 24 * 60 * 60 * 1000)))
  } }},
    {$project: { _id: 0, products: 1 } },
    {$unwind: "$products" },
    {$group: { _id: "$products", quantity: { $sum: "$quantity" } }},
    {$project: { _id: 0,products: "$_id", quantity: 1 } },
    {$sort: { tags: -1 } }
  ])
  res.send(pro)

})




router.get('/getorder',async function(req,res){
    console.log("hihi");
    let all_products=await Order.find().sort({Date:-1})
  
    res.send(all_products)
  
  })
  
   

  
  
  
  
  
  module.exports=router;