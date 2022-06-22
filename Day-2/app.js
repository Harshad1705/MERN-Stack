
// In terminal  : npm install express
// folder is created names as "node_modules"
// npm - node package manager


// In terminal  : npm install nodemon

var express = require("express")
var app = express()

app.listen(3000)

app.get("/" , (req,res)=>{
    res.send("Hello World");
});
