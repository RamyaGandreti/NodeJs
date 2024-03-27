//improt express module

let express=require("express");

//create rest object
let app=express();
//here app is the rest object
//app is used to create the rest services like GET , POST, PUT, DELETE ...


//get request
app.get("/",(req,resp)=>{
    resp.status(200).json({"message":"this is GET method"});
});
app.get("/demo",(req,resp)=>{
    resp.status(200).json({"message":"this is GET Demo method"});
});

//post method
app.post("/",(req,resp)=>{
    resp.status(200).json({"message":"This is POST method"})
});

app.post("/demo",(req,resp)=>{
    resp.status(200).json({"message":"This is POST Demo method"})
})

app.listen(2000,()=>{
    console.log("Express Js started at port 2000");
})