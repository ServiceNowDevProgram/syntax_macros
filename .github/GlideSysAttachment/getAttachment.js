// Specify the table name where the attachment is stored
var tableName = '<table_name>'; // Replace with your table name

// Specify the record sys_id for the attachment you want to retrieve
var recordSysId = 'INSERT_RECORD_SYS_ID_HERE'; // Replace with the actual sys_id

// Specify the attachment file name you want to retrieve
var attachmentFileName = 'example.txt'; // Replace with the actual attachment file name

// Create a GlideSysAttachment instance
var attachment = new GlideSysAttachment();

// Get the attachment record(s) based on the table and record sys_id
var attachments = attachment.getAttachments(tableName, recordSysId);

while(attachments.next())
gs.info(agr.getValue('file_name'));//getAttachment

