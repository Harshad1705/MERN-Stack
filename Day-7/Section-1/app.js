
var express = require("express")
var app = express()
app.listen(3000)

// install mongodb package
var MongoClient = require("mongodb").MongoClient
// default mogo port:27017
url = "mongodb://localhost:27017/";

app.get("/",(req,res)=>{
    // connect with mongodb
    MongoClient.connect(url,function(err,db){
        // if connect successfull it return object "db"
        // connect with database
        var dbo = db.db("mybd5")
        // create json object
        var obj = {enroll:101,name:"first"}
        // insert objesct into student table of mydb5 database
        dbo.collection("student").insertOne(obj,function(err,result){
            // close database
            db.close();
            // print result object 
            res.send(result );
        });
    });
});

// download the mongodb

// to run this file

// first connect server
// then start client
// run the code
// check the entry in database
