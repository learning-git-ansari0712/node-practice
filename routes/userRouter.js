const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("hellow i'm working");
})

module.exports=router;