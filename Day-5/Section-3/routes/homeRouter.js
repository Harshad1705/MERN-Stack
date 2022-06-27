var express=require("express");
var router=express.Router();

router.get("/",(req,res)=>{
    res.render("index")
});

router.get("/search",(req,res)=>{
    res.send(req.query);
})

module.exports=router;