const express = require('express');
const exphbs  = require('express-handlebars');
const Pizzas = require('./orderPizza');

const pizza = Pizzas();

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/register', function(req, res){
	res.render('register');
})

app.post('/register', function(req, res){
	res.redirect('/');
})

app.get('/cart', function(req, res){

});

app.get('/buy', function(req, res) {
	let largePizza = pizza.getLargePizzaTotalPrice();
	let mediumPizza = pizza.getMediumPizzaTotalPrice();
	let smallPizza = pizza.getSmallPizzaTotalPrice();
	let overallTotal = pizza.getOverallTotalPrice();
		console.log(req.query.action);
		pizza.orderPizza(req.query.action);
		console.log(pizza.getCart());
		res.render('index', { smallPizza, mediumPizza, largePizza, overallTotal});
		// console.log('Medium price : ' + );
		// console.log('Small price : ' + pizza.);
		// console.log('Total  price : ' + pizza.getOverallTotalPrice());
	
	
});

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});