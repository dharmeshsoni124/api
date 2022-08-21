const express=require("express")
const app=express();
const mongoose=require("mongoose")
const cors= require("cors")
const ejs=require("ejs");
port = process.env.PORT||3006;
 const customerModal=require("./schema/customerSchema");
const inventoryModal=require("./schema/inventorySchema");
const orderModal=require("./schema/order");




app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:false}));
app.use(cors())
app.set("view engine", "ejs");

app.listen(port, (err) => {
    if (!err) {
      console.log(`server started at port ${port}`);
    } else {
      console.log(err);
    }
  }); 

  mongoose.connect("mongodb+srv://dharmesh:dharmesh124@instaclone1.wupz9sm.mongodb.net/apiwebtechretryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to db");
  },
  (err) => {
    console.log(err);
  }
);
// app.get('/',(req,res) =>{
    
//     inventoryModal .find({}, function(item) {
   
   
//     res.render('inventory',{userdata:data});
//     });
//   });
// app.get("/", function (req, res) {   
//     inventoryModal.find({}, function (err, data) {
       
//             res.render("inventory", { data: data })
        
//     })
//     });

    // app.get("/", (req,res) => {
    //     inventoryModal.find().then((data) => {
    //       res.send("inventory", {data : data})
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    //   })
      app.get("/", (req,res) => {
        res.render("inventory")
        
         })
   
    app.get("/customer", (req,res) => {
        res.render("customer")
        
         })

         app.get("/order", (req,res) => {
            res.render("order")
            
             })
         
    
  
    app.post("/",(req,res)=>{
        const { inventory_Id,inventory_type ,item_name ,avilable_quantity}=req.body;
       
      
        const inventory=new  inventoryModal({
            inventory_Id,
        inventory_type,
        item_name ,
        avilable_quantity ,
        
      
      
        })
        inventory.save().then(()=>res.send('successfully uploaded')).catch((err)=>console.log(err));
        
      })
      app.post("/customer",(req,res)=>{
        const { customer_id,customer_name , email}=req.body;
       
      
        const customer=new  customerModal({
            customer_id,
            customer_name ,
             email,
        
      
      
        })
        customer.save().then(()=>res.send('successfully uploaded')).catch((err)=>console.log(err));
        
      })
      app.post("/order",(req,res)=>{
        const { customer_id,inventory_id ,  Item_name, quantity}=req.body;
       
      
        const order=new  orderModal({
            customer_id,
            inventory_id ,
            Item_name,
            quantity ,
        
      
      
        })
        order.save().then(()=>res.send('successfully uploaded')).catch((err)=>console.log(err));
        
      })