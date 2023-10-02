(function process(/*ResolverEnvironment*/ env) {

    var sysid = env.getArguments().sys_id; // this function will help you to get the sys_id of defined incident.
	var now_gr = new GlideRecord('incident');
	now_gr.addQuery('sys_id',sysid);  // this will check, if sys_id exist or not.
	now_gr.query();
	return now_gr; // This will return the entire record.

})(env);
