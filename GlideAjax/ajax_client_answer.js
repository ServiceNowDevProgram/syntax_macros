/**
 * Description:
 * @class {string} ScriptInclude Class Name: ScriptIncludeClass
 * @function {string} ScriptInclude Function name being called: scriptIncludeFunction
 * @param {string} Additional Parameters: sysparm_parameter_name
 * @callback {function} Callback Method that will be called: callbackFunction
 */

var ga = new GlideAjax("ScriptIncludeClass");
ga.addParam("sysparm_name", "scriptIncludeFunction");
ga.addParam("sysparm_parameter_name", "string_value");
ga.getXMLAnswer(function (answer) {
	if (answer) {
		answer = JSON.parse(answer);
		// Perform action based on return values
		//g_form.setValue("fieldName", answer);
	}
});
