//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var login = require('./controllers/login');
var registration = require('./controllers/registration');
var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
var components = require('./controllers/components');
var user = require('./controllers/user');
var logout = require('./controllers/logout');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use('/abc', express.static('xyz'))
app.use('/login', login);
app.use('/registration',registration);
app.use('/admin', admin);
app.use('/components', components);
app.use('/customer', customer);
app.use('/user', user);
app.use('/logout', logout);


//ROUTER
app.get('/', function(request, response){
	response.send('index page!');
});

app.get('/test/your/:name/:id', function(request, response){
	var id = request.params.id;
	var name = request.params.name;
	response.send(id+" "+name);

});


//SERVER STARTUP
app.listen(4000, function(){
	console.log('server started at 4000... And this is Lab final');
});