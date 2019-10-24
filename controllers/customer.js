var express = require('express');
var db = require('./../models/db');

var router = express.Router();

router.get('/', function(request, response){

		if(request.cookies['username'] != null){
			response.render('customer/index');		
		}else{
			response.redirect('/logout');
		}	
});

module.exports = router;



