//Initialize Excel Parser
var excelParser = new sn_impex.GlideExcelParser(); 

//Initialize Attachment API
var glideAttachment = new GlideSysAttachment();
var attStream = glideAttachment.getContentStream("<attachment_sys_id>"); //Replace <attachment_sys_id> with the sys_is of attachment

excelParser.parse(attStream); 

//Retrieve the column headers
var headers = excelParser.getColumnHeaders();

while(excelParser.next()) {
  var row = excelParser.getRow(); //JSON object of row
  //Read each column using headers, for example row[header[0]]
}

excelParser.close(); // Close the stream and release the document