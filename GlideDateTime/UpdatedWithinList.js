// Retrieve records updated within the last 30 days using date filtering
let gr = new GlideRecord('incident');
let date = new GlideDateTime();
date.subtract(30 * 24 * 60 * 60 * 1000); // 30 days ago
gr.addQuery('sys_updated_on', '>=', date);
gr.query();

while (gr.next?.()) {
    gs.info('Incident ${gr.number} was updated within the last 30 days.');
}
