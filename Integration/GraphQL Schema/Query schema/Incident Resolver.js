(function process(/*ResolverEnvironment*/ env) {

   var user = env.getSource(); // this function will help you to get the sys_id of defined caller id.
	var now_gr = new GlideRecord('incident');
	now_gr.addQuery('sys_id',user); // // this will check, if sys_id exist or not.
	now_gr.query();
	return now_gr;  // This will return the entire record.

})(env);
