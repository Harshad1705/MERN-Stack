// Routing path

var express = require("express")
var app = express()

app.listen(3000)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});
app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/about.html")
});
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname + "/contact.html")
});
app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/login.html")
});
app.get("/gallery",(req,res)=>{
    res.sendFile(__dirname + "/gallery.html")
});
