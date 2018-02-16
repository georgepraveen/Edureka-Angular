var express = require("express");
var app = express();
var http=require('http').Server(app);
var routes= require('./server-routes.js');

app.use("/client",express.static('src/client'));
app.use("/node/modules",express.static('node_modules'));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials','false');
    next();

});

app.use('/',routes);

http.listen(9001,function(){
    console.log('Listening on :9001');
})