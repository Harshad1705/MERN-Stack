var express = require("express")
var app = express()

app.listen(3000)

var homeRouter = require("./routes/homeRouter");
var loginRouter = require("./routes/loginRouter");

app.use('/',homeRouter);
app.use('/login',loginRouter)
