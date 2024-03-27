//Http server
// http server will be created with HTTP module, it is predefined module
//no need to download the module


// to import the http module we need require() method

let http=require('http');

let server=http.createServer((req,res)=>{
    // //MIME type
    // res.writeHead(200,{'content-type:':'text/html'});
    res.write("Http Server created");
    res.end();
});

server.listen(2000);
console.log("server listing at port 2000");