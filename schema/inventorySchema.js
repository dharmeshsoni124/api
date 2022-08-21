const mongoose=require("mongoose");

const inventorySchema=mongoose.Schema({
    inventory_Id:String,
    inventory_type:String,
    item_name:String,
    avilable_quantity:Number,
});

const inventoryModal=mongoose.model("inventory",inventorySchema);

module.exports=inventoryModal;