var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"

router.get('/register',(req,res)=>{
  var name = req.query.name;
  var enroll = req.query.enroll;
  var dept = req.query.dept;
  var age = req.query.age;

  var obj = {Name:name,Enroll_No:enroll,Departmen:dept,Age:age};

  MongoClient.connect(url,function(err,db){
    var dbo = db.db("myDb")
    dbo.collection("student").insertOne(obj,function(err,result){
      db.close();
      res.send("<a href=\show > show all records</a>");
    })
  })
})

router.get("/show",(req,res)=>{
  MongoClient.connect(url,function(err,db){
    var dbo = db.db("myDb")
    dbo.collection("student").find({}).toArray(function(err,result){
     obj=result;
     res.render("show", obj);
    })
  })
})

module.exports = router;
