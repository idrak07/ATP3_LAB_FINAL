var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/registration');
});

router.post('/', function(request, response){
	var user={
		username : request.body.username ,
		password : request.body.password
	}
	console.log(user);
	userModel.insertcustomer(user, function(status){
		
		if(status){
			console.log('New Customer Registerd');
			response.redirect('/login');
		}else{
			console.log('Something Went Wrong ');
			response.redirect('/Registration');		}
	});

});

module.exports = router;


