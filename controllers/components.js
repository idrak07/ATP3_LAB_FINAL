var express = require('express');
var db = require('./../models/db');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function(request, response){

		if(request.cookies['username'] != null){
			if(request.cookies['userstatus'] ==2){
				next();
			}	
			else
			{
				response.redirect('/logout');
			}
		}
		else{
			response.redirect('/logout');
		}	
});
router.get('/:type', function(request, response){

	console.log(request.params.type);
	userModel.getByType(request.params.type, function(result){
		console.log(result);
		var obj={
			results: result
		}
		response.render('components/laptop', obj);
	});
	
});

router.get('/:type/:id', function(request, response){

	console.log(request.params.type);
	userModel.getByid(request.params.id, function(result){
		console.log(result);
		
		response.render('components/details', result);
	});
	
});

module.exports = router;



