const mongoose =require("mongoose");

const ownerShema=mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    isadmin:Boolean,
    product:{
        type:Array,
        default:[]

    },
    picture:String,
    gstin:String
});
module.exports=mongoose.model("Owner",ownerShema);