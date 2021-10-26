var requestBody;
var responseBody;
var status;
try {
	var ws = new sn_ws.RESTMessageV2("<REST_message_record>", "<REST_method>");
	
	// sm.setAuthenticationProfile('oauth2', '1234adsf123212131123qasdsf'); 

	ws.setStringParameter("<symbol>", "<value>");
	ws.setStringParameterNoEscape("<xml_data>", "<data>test</data>");

	//In milliseconds. Wait at most 10 seconds for response from http request.
	ws.setHttpTimeout(10000);
	//Might throw exception if http connection timed out or some issue with sending request itself because of encryption/decryption of password.
	response = ws.execute();
	responseBody = response.haveError() ? response.getErrorMessage() : response.getBody();

	status = response.getStatusCode().toString();
	if (status == '200' || status == '201') {
			var answer = JSON.parse(responseBody);
	}
} catch (ex) {
    responseBody = ex.getMessage();
    status = '500';
    //gs.warn('Error processing outbound REST: '+responseBody);
	
} finally {
    requestBody = ws ? ws.getRequestBody() : null;
}
gs.log(responseBody, "<unique_log_identifier>");
