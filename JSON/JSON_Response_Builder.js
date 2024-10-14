/* 
  # buildJsonResponse Utility Function 
  
  # This function constructs a standardized JSON response for any operation.
    It takes three parameters:
    - `success` (Boolean): Indicates if the operation was successful (true/false).
    - `message` (String): A message providing context or information about the operation's outcome.
    - `data` (Object): An object containing any additional data related to the operation (key-value pairs or complex objects).
*/


//Function
function buildJsonResponse(success, message, data) {
    return JSON.stringify({
        success: success,
        message: message,
        data: data
    });
}

// Usage example
var json_data = {
"key1":"value1",
"key2":"value2"
};

var response = buildJsonResponse(true, 'Operation successful', json_data);
gs.info('Response: ' + response);
