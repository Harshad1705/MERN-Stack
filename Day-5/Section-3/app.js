var express=require("express");
var app=express();
app.listen(3000);
app.use(express.static('public')); 
var ejs=require("ejs");
app.engine("html",ejs.renderFile);
app.set("view engine","html");

var homeRouter=require("./routes/homeRouter");

app.use("/",homeRouter);

// validating form using javascript
