var db = require('./db')

module.exports = {

	getByType: function(type, callback){

			var sql = "SELECT * FROM `comp` WHERE `ctype`= ?";
			db.getResults(sql, [type], function(result){
				if(result.length > 0 ){
					console.log(result);
					callback(result);
				}else{
					callback([]);
				}
			});
	},
	getByid: function(type, callback){

			var sql = "SELECT * FROM `comp` WHERE `cid`= ?";
			db.getResults(sql, [type], function(result){
				if(result.length > 0 ){
					console.log(result);
					callback(result);
				}else{
					callback([]);
				}
			});
	},
	validate: function(user, callback){
		var sql ="select * from user where username=? and password=?";

		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length > 0){
				console.log(result[0]);
				callback(result[0].status);
			}
			else{
				callback(3);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select * from user";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insertadmin: function(user, callback){

		var sql ="insert into user values('', ?, ? , ?)";
		var flag=0;
		db.execute(sql, [user.username, user.password ,flag], function(status){
			callback(status);
		});
	},
	insertcustomer: function(user, callback){

		var sql ="insert into user values('', ?, ? , ?)";
		var flag=2;
		db.execute(sql, [user.username, user.password ,flag], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql ="update user set username=?, password=? where id=?";
	
		db.execute(sql, [user.username, user.password, user.id], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}



