//Example of Add or condtion 
var gr = new GlideRecord('incident');
gr.addQuery('priority','4').addOrCondition('priority', '3'); //getting priority 3 and 4 incidents
gr.query();
while(gr.next()){
    gs.print(gr.number);
 
}
gs.print(gr.getRowCount())
