/**
 * fieldName_current {string}: A REFERENCE type field name on current record
 * function {function}: An anonymous function used as a callback function
 * recObject {object/GlideRecord object}: GlideRecord object of the record in reference field
 * fieldName_ref {string}: A field name on the returned record to perform an action based on it's value
 *
 */

g_form.getReference("fieldName_current", function (recObject) {
	if (recObject["fieldName_reference"] == true) {
		// do something
	}
});
