

var express = require("express")
var app = express()

app.listen(3000)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/xyz" , (req,res)=>{
    a = req.query.name;
    res.send("Hello " + a);
})
