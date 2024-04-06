import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to express</h1>")
});
app.get("/about",(req,res)=>{
    res.send("<h1>About us</h1>")
});

app.use((req,res)=>{
    res.status(404).send("<h1>Page Unavailable</h1>")
});

app.listen(3001,()=>{
    console.log("Express Server is running Successfully in http://Localhost:3001/");
});