//Find all inactive incidents and delete them all at once
var gr = new GlideRecord('incident');
gr.addQuery('active', false);
gr.deleteMultiple(); //Deletes all records in the record set
