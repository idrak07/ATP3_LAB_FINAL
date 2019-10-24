var express = require('express');
var db = require('./../models/db');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function(request, response){

		if(request.cookies['username'] != null){
			if(request.cookies['userstatus'] ==0){
				response.render('admin/index');	
			}
			else
			{
				response.redirect('/logout');
			}	
		}else{
			response.redirect('/logout');
		}	
});

router.get('/registration', function(request, response){
	response.render("admin/registration");
});

router.post('/registration', function(request, response){
	var user={
		username : request.body.username ,
		password : request.body.password
	}
	console.log(user);
	userModel.insertadmin(user, function(status){
		
		if(status){
			console.log('New Admin Registerd');
			response.redirect('/admin');
		}else{
			console.log('Something Went Wrong ');
			response.redirect('/admin/Registration');		}
	});

});
module.exports = router;



