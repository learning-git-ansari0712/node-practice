const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/node-project")
.then(function(){
    console.log("connected")
})
.catch(function(error){
    console.log(error);
    
})

module.exports=mongoose.connection;

