const express=require("express");
const app=express();
const usermodel=require("./models/user");
const cookie = require("cookie-parser");
const bcrypt=require("bcrypt");

app.get("/",(req,res)=>{
    res.send("aftab");
})
app.listen(3000);