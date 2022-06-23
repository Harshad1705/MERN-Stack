var express = require("express")
var app = express()

app.listen(3000)

// npm install ejs
var ejs = require("ejs")
app.engine("html",ejs.renderFile)
app.set('view engine','html')

var homeRouter = require("./routes/homeRouter");
var loginRouter = require("./routes/loginRouter");
var htmlPage = require("./routes/index.js");

app.use('/',homeRouter);
app.use('/login',loginRouter)
app.use('/html',htmlPage)
