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
            default:
                respnse.writeHead(404,{
                    "Content-Type":"text/html",
                });
			console.log("404 Page has been implemented");
                response.write("<p>404 Page Not Found!</p>");
                response.end();
                break;
        }
    })
    .listen(8080);
