// A servers needs a req and response
import http from "http";
import url from "url";


// creating a Local Server
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Application/json'})
    //server creation is ended 
    
    //give the res data 
    res.end(JSON.stringify({
        data:'Hello World',
    }))
});

// to declare the server 
server.listen(5000,()=>{
    console.log("Server is running at http://localhost:500");
})