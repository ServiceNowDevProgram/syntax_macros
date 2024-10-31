**Create a GlideRecord Object:**
var grInc = new GlideRecord('incident');

**Initialize the Encoded Query String:**
var strQuery = 'active=true^category=software^ORcategory=hardware';

**Add the Encoded Query to the GlideRecord:**
grInc.addEncodedQuery(strQuery);

**Execute the Query:**
grInc.query();
