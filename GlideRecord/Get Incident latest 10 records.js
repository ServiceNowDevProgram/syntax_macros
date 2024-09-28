//getting incident records latest 10 
var gr = new GlideRecord('incident');
gr.orderByDesc('sys_created_on'); // Order by creation date in descending order
gr.setLimit(10); // Limit the result to 10 records
gr.query();

while (gr.next()) {
    gs.log('Incident Number: ' + gr.getValue('number') + ', Created On: ' + gr.getValue('sys_created_on'));
}
