//generate a cart and insert an RITM, for additional RITMs, copy line 7 & 8 as needed

var cart = new Cart();
var RITM = cart.addItem('sysid of cat item'); //first ritm
cart.setVariable(RITM, 'variable name', 'value'); // setting variables, copy paste this line for multiples

var RITM2 = cart.addItem('sysid of cat item'); //second ritm
cart.setVariable(RITM2, 'variable name', 'value'); // setting variables, copy paste this line for multiples

var request = cart.placeOrder(); // this returns the sysid of the top-level request
