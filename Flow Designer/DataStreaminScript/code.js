(function() {
	
	try {
​
		// Execute Data Stream Action. 
		var stream = sn_fd.FlowAPI.executeDataStreamAction('Actionname with Scope in front'); //global.test
​
		// Process each item in the data stream
		while (stream.hasNext()) {
​
			// Get a single item from the data stream.
			var user = stream.next();
		
			// Only log the first item in each page
			if (stream.getItemInPageIndex() == 0) {
				gs.info('first user on page is ' + user.name);
			}
		}		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
	} finally {
		stream.close();
	}
	
})();
