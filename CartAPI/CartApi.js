//generate a cart and insert an RITM

var cart = new Cart();
var RITM = cart.addItem('sysid of cat item');
cart.setVariable(RITM, 'variable name', 'value'); // setting variables, copy paste this line for multiples
var request = cart.placeOrder(); // this returns the sysid of the top-level request
