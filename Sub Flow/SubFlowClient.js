/**
 * Initiates and manages the execution of a subflow from a client script in ServiceNow.
 * */
(function() {
	
	var inputs = {};

	GlideFlow.startSubflow('<Sub flow name>', inputs)
		.then(function(execution) {
			return execution.awaitCompletion();
		}, errorResolver)
		.then(function(completion) {

			var status = completion.status;

			// Available Outputs:
			var outputs = completion.outputs;		
		});

	function errorResolver(error) {
		// Handle errors in error resolver
	}
})();
