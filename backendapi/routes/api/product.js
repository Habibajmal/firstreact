const express= require('express')
const router=express();
const Product= require('../../models/product')
const mongoose= require('mongoose')
const multer = require('multer');  
const path = require("path") 
var auth = require('../../middleware/auth');
var admin = require('../../middleware/admin');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });
  
  const fileFilter=function (req, file, callback) {
    var ext = path.extname(file.originalname);
    ext = ext.toLowerCase()
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error('Only Images are allowed'))
    }
    callback(null, true);
  } 
  
  var upload = multer({ 
    storage:storage,
     limits:{
         fileSize: 1024 * 1024 * 5
     },
    fileFilter:fileFilter
  });

router.post('/',upload.fields([{name:"name"},{name:"price"},{name:"quantity"},{name:"description"},{name:"productimage"}]), async function(req, res) {
       var products=new Product()
       
             products._id= mongoose.Types.ObjectId(),
       
    products.name=req.body.name;
    products.price=req.body.price;
    products.description=req.body.description;
    products.quantity=req.body.quantity;
    products.productimage= req.files.productimage[0].filename;
    console.log(products.name)
     await products.save()

    
  });


  router.get('/',async(req,res)=>
  {
  
      let products= await Product.find();
      return res.send(products);
     
  });
  


router.get('/:id' ,async (req,res)=>
{
    try{
            let product= await Product.findById(req.params.id)
            if(!product)
            {
                return res.status(400).send("Product is not present");
            }    
            
            return res.send(product);

        }
    catch(err)
        {
            return res.status(400).send("Invalid ID");
        }

    });

    router.delete('/:id',async (req,res)=>
{
 
    try{
            let product= await Product.findByIdAndDelete(req.params.id)
            if(!product)
            {
                return res.status(400).send("Product is not present");
            }    
            return res.send(product);

        }
    catch(err)
        {
            return res.status(400).send("Invalid ID");
        }

    });
router.put('/:id',async(req,res)=>
{
  console.log(req.body.description);
   let product= await Product.findById(req.params.id);
   product.name=req.body.name;
   product.price=req.body.price;
   product.quantity=req.body.quantity;
   product.description=req.body.description;
    await product.save();
   return res.send(product);

});


module.exports=router;
