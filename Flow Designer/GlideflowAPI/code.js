// Start a Flow
(function() {
      var inputs = {};
      inputs['current'] = { // GlideRecord 
        table : 'table_name', 
        sys_id : 'sys_id of record'  
    };
        inputs['table_name'] = 'table_name';
         GlideFlow.startFlow('global.flow_name', inputs)
		.then(
			function(execution) {
				console.log('Started flow_name with execution id :' + execution.getExecutionId());
			},
			function(error) {
				console.log('Unable to start flow: ' + error);
			}
		);
})();
