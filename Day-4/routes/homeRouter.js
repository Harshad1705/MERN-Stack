var express=require("express");
var router=express.Router();

router.get("/",(req,res)=>{
    obj=[
    {enroll:"0827CO191013", name:"Anshul"},
    {enroll:"0827CO191009", name:"Aman"},
    {enroll:"0827CO191001", name:"Ayush"},
    {enroll:"0827CO191021", name:"Harsh"},
];
    res.render("index",obj);
});

module.exports=router;