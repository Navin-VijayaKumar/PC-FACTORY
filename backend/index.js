const port = 4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer = require("multer");
const path=require("path");
const cors=require("cors");
const { type } = require("os");
const { readFileSync } = require("fs");
 
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://navinv:9788665770@cluster0.d9sg7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  


app.get("/",(req,res)=>{
    res.send("express app is running")
    console.log("express app is running");

})
// to store image
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload =multer({storage:storage})
//end point
app.use("/images",express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});
//schema
 const Product=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
   name:{
    type:String,
    required:true,


   } ,
   image:{
    type:String,
    required:true,
   } ,
   category:{
    type:String,
    required:true,
   },
   new_price:{
    type:Number,
    required:true,
},
old_price:{
    type:Number,
    required:true,
},
date:{
    type:Date,
    default:Date.now,
},
avilable:{
    type:Boolean,
    default:true,
},
 })
 app.post('/addproduct',async (req,res)=>{
    let products= await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array=products.slice(-1);
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,



    });
  console.log(product);
  await  product.save();
  console.log("saved");
  res.json({
    success:true,
    name:req.body.name,


  })

 })
 app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
      success:true,
      name:req.body.name
    })
 })

 app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All products are displayed from database");
    res.send(products);
 })
app.listen(port,(e)=>{
    if (!e){
        console.log("Server is running on the port:"+port);

    }
    else{
        console.log("Error on mongoDB connection"+e);
    }

})