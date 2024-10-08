var glideAttachment = new GlideSysAttachment();
//Get attachments as GlideRecord Objects
var gAttRec = glideAttachment.getAttachments('<table_name>', '<record_sys_id>'); //Replace <table_name> with your table and <record_sys_id> with sys_id of the record
while(gAttRec.next()){
    //Process each attachment record
}
