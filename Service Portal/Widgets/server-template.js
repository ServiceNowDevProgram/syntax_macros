// basic template example for server acript
try {
  
  // identifying different request using 'action'
  if (input && input.action === 'ACTION_NAME') {
    // assigning response to the request from return
    data.KEY_NAME = someCallback();
  }

} catch (e) {
  // Add an error object to the response data
  data.error = {
    name: e.name,
    message: e.message,
    fileName: e.fileName,
    lineNumber: e.lineNumber
  };
}

function someCallback() {
  // put process or excution here
  return {
	'KEY_1': 'RESPONSE_VALUE_1',
    //...
  };
}
