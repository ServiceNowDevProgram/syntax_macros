//Adds trends for a field
var trend = new GlideAggregate('incident');  
trend.addTrend ('opened_at','month');  
trend.addAggregate('COUNT');  
trend.setGroup(false);  
trend.query();  
while(trend.next()) {  
   gs.print(trend.getValue('timeref') + ': ' + trend.getAggregate('COUNT'));  
}  
