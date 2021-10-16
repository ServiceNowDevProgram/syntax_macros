try { 
 var r = new sn_ws.RESTMessageV2('message_name', 'method_name');

//override authentication profile 
//authentication type ='basic'/ 'oauth2'
//r.setAuthenticationProfile(authentication type, profile name);

//set a MID server name if one wants to run the message on MID
//r.setMIDServer('MY_MID_SERVER');

 r.setStringParameter("variable_name1", "variable_value1");
 r.setStringParameter("variable_name2", "variable_value2");
 r.setStringParameter("variable_name3", "variable_value3");
 r.setStringParameterNoEscape("variable_name4", "variable_value4");
  
 var response = r.execute();
 var responseBody = response.getBody();
 var httpStatus = response.getStatusCode();
}
catch(ex) {
 var message = ex.message;
 //gs.warn('Full Stack Details:'+JSON.stringify(ex,null,4));
 
 //Optional: Throw full stack trace
 //throw ex 
 
}
