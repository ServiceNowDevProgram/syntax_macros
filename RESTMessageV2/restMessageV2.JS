//Macro to quickly set up a REST call

var rest = new sn_ws.RESTMessageV2();
rest.setEndpoint("end_point");
rest.setHttpMethod("POST"); //POST, GET, etc.
rest.setRequestHeader("Content-Type", "application/json");
rest.setLogLevel("all");

var response = rest.execute();
var responseBody = response.getBody();
var httpStatus = response.getStatusCode();
