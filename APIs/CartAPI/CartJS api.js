//use this when trying to create a request within a scoped app

var cart = new sn_sc.CartJS(); // CartJS uses a JSON object to capture item and variables
var item = { 
	'sysparm_id': 'sysid of catalog item',
	'sysparm_quantity': '1',
	'variables': {
		'variablename': 'value',
		'variablename': 'value'
	}

var cartVals = cart.addToCart(item); // this will return a JSON object
var checkoutVals = cart.checkoutCart(); // this will also return a JSON object containing information about the submitted cart
