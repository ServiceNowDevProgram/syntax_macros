var g_ajax = new GlideAjax('scope.ScriptIncludeName');  // pass name of Client callable script include
g_ajax.addParam('sysparm_name','scriptIncludeFunctionName');   // pass function name which will return result
g_ajax.addParam('sysparm_param1','value1');  // optional
g_ajax.addParam('sysparm_param2','value2');    // optional
g_ajax.getXMLAnswer(callbackFunctionName);

function callbackFunctionName(response){
var answer = response;
//if you are passing array then use below to parse response
//var answer = JSON.parse(response);
}
