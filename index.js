const http = require("http");

http
    .createServer((req,res)=>{
        console.log(res);
        res.write("<h1>Home page!</h1>");
        res.end();
    })
    .listen(8080);