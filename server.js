const express = require("express");

let app=express();

app.get("/demo",(req,res)=>{
    res.send("Welcome to Integration of AWS server")
});

let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server started");
});