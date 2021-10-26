(function() {
	
	try {
		var inputs = {};
		inputs['table_name'] = 'Table Name';
		inputs['current'] = <GR for the current table>; // GlideRecord of table: sc_req_item 

		// Start Asynchronously: Uncomment to run in background.
		// sn_fd.FlowAPI.getRunner().flow('APPLICATIONSCOPE.FLOW NAME').inBackground().withInputs(inputs).run();
				
		// Execute Synchronously: Run in foreground.
		sn_fd.FlowAPI.getRunner().flow('APPLICATIONSCOPE.FLOW NAME').inForeground().withInputs(inputs).run();
		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
	}
	
})();
