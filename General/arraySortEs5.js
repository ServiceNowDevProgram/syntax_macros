/**
 * JS sort function using ES5 syntax
 * @param {array} myArray - Array variable which has to be sorted based on a custom logic
 * @return {array} - The sorted array 
 */
sortArrayUsingEs5: function(myArray) {

	// Need to call the sort function of array object
	return myArray.sort(function(itemA, itemB) {
		/**
		 * The sorting logic comes here 
		 * @param {object} itemA - The first element for comparison. Will never be undefined.
		 * @param {object} itemB - The second element for comparison. Will never be undefined.
		 * 
		 * @return {number} - Nedd to return three different numbers based on the following logic:
		 * If itemA is sorted before itemB, then the return value will be -1 (or any other negative number)
		 * If itemB is sorted before itemA, then the return value will be 1 (or any other positive number)
		 * If itemA equals with itemB, then the return value will be 0
		 * 
		 * itemA and itemB can be a complex object as well, the sorting logic can be based on any attributes of the main objects.
		*/

		if (/* Logic here which checks that itemA is sorted before itemB */ itemA < itemB)
			return -1;

		if (/* Logic here which checks that itemB is sorted before itemA */ itemA > itemB)
			return 1;
		
		// Otherwise
		return 0;
	});
},
