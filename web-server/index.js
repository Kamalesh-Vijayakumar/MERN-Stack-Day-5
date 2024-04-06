import http from "http";
import url from "url";
//these two are native parent package 
const server = http.createServer((req,res)=>{
    // it choses one request among multiple req 
    const parseurl = url.parse(req.url,true);
    if (parseurl.pathname === "/" && req.method === "GET")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("<h1>Web Server Creation Sucessfull!</h1>");
    }

    else if(parseurl.pathname === "/about" && req.method === "GET")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("<h1>Welcome to the About Page</h1>");
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>Sorry this page is not available</h1>");

    }
});
server.listen(5000,()=>{
    console.log("Server is running Successfully in http://localhost:5000");
});