//Find all active incidents and order the results ascending by category then descending by created date
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.orderBy('category');
gr.orderByDesc('sys_created_on');
gr.query();
