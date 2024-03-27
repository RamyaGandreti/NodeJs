//import http module
let http=require("http");

//import url module
//url module is used to read the qurey paramentes
//url module is also a predified module

let url=require("url");

//create http server
let server=http.createServer((req,res)=>{
    //set the MIME type
    //communication language between client and sever called as MIME

    res.writeHead(200,{'content-Type':'text/html'});
    
    let obj= url.parse(req.url,true).query;
    if(obj.uname=== "ramya" && obj.upwd==="ramya"){
        res.write("<h1>Login Success<h1>");
    }else{
        res.write("<h2>Login fail<h2>");
    }
    res.end();
});

server.listen(2000);