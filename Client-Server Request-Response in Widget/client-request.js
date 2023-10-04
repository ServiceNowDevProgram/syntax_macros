// Option for client.server.get
var option = {
  action: 'ACTION_NAME', // not necessary to use 'action' keyword as is only for identifying different request on server script
  'KEY_1': 'VALUE_1',  
  'KEY_2': 'VALUE_2',
  //..
};

// below $client is the controler parameter in widget
// Make a GET request to the server with the specified option
$client.server.get(option).then(function(response) {
  // Log the response data
  console.log(response.data);
});
