var express = require("express");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.unlencoded({
    extended:true
}));
app.route('/').get(function(req,res){
    res.sendFile(__dirname+'/src/index.html')
})

//WebAuthentication

app.route('/userlogin').post(db.login);
app.route('/users').get(db.users);
app.route('/getuser').get(db.getuser);
app.route('/register').post(db.register);

//USERS SECTION

app.route('/users/candidates').get(db.candidates);
app.route('/users/vote').post(db.vote);
app.route('/users/votedFor').post(db.votedFor);
app.route('/users/getapproval').post(db.getapproval);
app.route('/users/getresults').get(db.userresults);

//ADMIN SECTION

app.route('/admin/candidates').get(db.candidates);
app.route('/admin/addcandidate').post(db.addcandidate);
app.route('/admin/deletecandidate').post(db.deletecandidate);
app.route('/admin/approvallist').get(db.approvallist);
app.route('/admin/approvevoter').post(db.approvevoter);
app.route('/admin/rejectvoter').post(db.rejectvoter);
app.route('/admin/results').get(db.adminresults);

app.route('*').get(function(req,res){
    res.redirect('/');
})

module.exports=app;

