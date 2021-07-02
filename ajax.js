/**
* Description:
* @class    ScriptInclude Class Name:				        	ScriptIncludeClass
* @function ScriptInclude Function name being called:	scriptIncludeFunction
* @param Additional Parameters:							          sysparm_custom_parameter
* @callback Callback Method that will be called:		  callbackFunction									
*/

var ga = new GlideAjax('ScriptIncludeClass');
ga.addParam('sysparm_name', 'scriptIncludeFunction');
ga.addParam('sysparm_custom_parameter', JSON.stringify({ "foo": "bar" }));
ga.getXML(function (response) {
    var responseDocument = response.responseXML.documentElement;
    var answer = responseDocument.getAttribute('answer');
    var serverObj = JSON.parse(answer);
    console.log(serverObj);
});
