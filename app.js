var express = require("express");
var app = express();

app.use(express.static( __dirname +"/stylesheets" ));
app.use(express.static( __dirname +"/scripts" ));

app.get("/",function(req,res){
    res.render("colorgame.ejs");
});



app.get("*",function(req,res){
 res.send("error 404 page not found");
});

app.listen(process.env.PORT,process.env.IP);