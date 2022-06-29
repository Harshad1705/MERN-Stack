var express = require("express")
var app = express()
app.listen(3000)

var MongoClient = require("mongodb").MongoClient
url = "mongodb://localhost:27017/";

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/register",(req,res)=>{
    var name = req.query.name;
    var enrll = req.query.enroll;
    var dept = req.query.dept;

    var obj = {name:name,Enroll:enrll,Department:dept};

    MongoClient.connect(url,function(err,db){
        var dbo = db.db("mybd5")
        dbo.collection("students").insertOne(obj,function(err,result){
            db.close();
            res.send(result );
        });
    });
})
