var attachment = new GlideSysAttachment();
//The syntax for write api is - <GlideRecord record>, <String fileName>, <String contentType>, <String content>
var attachmentSysId = attachment.write(current, 'file_name.txt', 'text/plain', 'file contents');
gs.info("Attachment Sys ID: " + attachmentSysId);
