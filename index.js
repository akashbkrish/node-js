const http = require("http");

http
    .createServer((req,res)=>{
        switch (http.request.url) {
            case "/":
                response.writeHead(200,{"Content-Type":"test/html",
            });
            response.write("<h1>Home page!</h1>");
            response.end();
            break;
            case"/about":
                respnse.writeHead(404,{
                    "Content-Type":"text/html",
                });
                response.write("<p>About Page!</p>");
                response.end();
                break;
        }
    })
    .listen(8080);