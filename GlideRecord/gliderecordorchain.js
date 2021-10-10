//Find all incidents with a priority of 1 or 2
var gr = new GlideRecord('incident');
gr.addQuery('priority', 1).addOrCondition('priority', 2);
gr.query();
