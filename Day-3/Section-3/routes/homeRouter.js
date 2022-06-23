var express = require("express")
var router = express.Router()

router.get("/",(req,res)=>{
    res.render("Home")       // render always search in views folder
})
module.exports = router;
