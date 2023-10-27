(function execute(inputs, outputs) {
  // This code will look up for the file and get the data from attachment 
  
  var parser = new sn_impex.GlideExcelParser(); 
  var attachment = new GlideSysAttachment();
  
  // use attachment sys id of an excel file
  
  var attachmentStream = attachment.getContentStream(inputs.cis_from_attachment);

  parser.parse(attachmentStream); 

  //retrieve the column headers
  var headers = parser.getColumnHeaders();  
  var header1 = headers[0]; 
  var header2 = headers[1];

  var excel_cis = [];
  var instance_ids = [];

  while(parser.next())
  {
    var row = parser.getRow(); 
    excel_cis.push(row[header1]);
    instance_ids.push(row[header2]);
  }
  outputs.ci = excel_cis;
  outputs.instance_ids = instance_ids;
  
})(inputs, outputs);
