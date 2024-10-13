const express = require("express");
const app = express();
const usermodel = require("./models/user");
const cookie = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const db=require("./config/mongoose-connection")
const ownerRouter=require("./routes/ownerRouter");
const productRouter=require("./routes/productRouter")
const userRouter=require("./routes/userRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.set("views engine", "ejs");
app.use("/owner",ownerRouter);
app.use("/product",productRouter);
app.use("/user",userRouter);

app.get("/", (req, res) => {
    res.send("aftab");
})
app.listen(3000);