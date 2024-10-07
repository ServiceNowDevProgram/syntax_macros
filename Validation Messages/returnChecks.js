//return validation messages based on sys_properties setting 
function onSubmit() {
    g_form.clearMessages();
    // a. When attachment reach limits
    g_form.addErrorMessage(getMessage("The uploaded attachment has reached upload limit of ") + 
                           gs.getProperty('com.glide.attachment.max_size') + "(MB) and/or max count of attachment at " + 
                           gs.getProperty('com.glide.cs.upload.attachment.max_count'));
}
