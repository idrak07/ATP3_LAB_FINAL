var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};
	console.log(user);
	userModel.validate(user, function(status){
		console.log(status);
		if(status==0){
			response.cookie('username', user.username);
			response.cookie('userstatus', status);
			response.redirect('/admin');
		}
		else if(status==2){
			response.cookie('username', user.username);
			response.cookie('userstatus', status);
			response.redirect('/customer');
		}
		else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


