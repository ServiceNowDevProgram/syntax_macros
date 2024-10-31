var grInc = new GlideRecord('incident');
var strQuery = 'active=true';
strQuery = strQuery + '^category=software';
strQuery = strQuery + '^ORcategory=hardware';
grInc.addEncodedQuery(strQuery);
grInc.query();
while(grInc.next()){
gs.print(grInc.number);
}
