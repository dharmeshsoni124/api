const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    customer_id:String,
    inventory_id:String,
    Item_name:String,
    quantity:Number
   
});

const orderModal=mongoose.model("order",orderSchema);

module.exports=orderModal;