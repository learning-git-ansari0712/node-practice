const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/node-project");

let usermodel=mongoose.Schema({
    name:String,
    age:Number
});
module.exports=mongoose.model("user",usermodel);