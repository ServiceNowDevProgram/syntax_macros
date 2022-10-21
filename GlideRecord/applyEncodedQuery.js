/**
* @Description : applyEncodedQuery(String queryString) method - Sets the values of the specified encoded query terms and applies them to the current GlideRecord
* @table_name : Name of the class on which record needs to be created
* @encoded_query : Encoded query to apply to the current GlideRecord.
**/

var newgr = new GlideRecord('<table_name>'); 
var queryString = '<encoded_query>';
newgr.initialize();
newgr.applyEncodedQuery(queryString);
newgr.insert();
