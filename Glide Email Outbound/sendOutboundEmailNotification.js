//Macro to send an email notification.

var email = new GlideEmailOutbound();
email.setSubject('Send notification from the script');//Set Subject
email.setBody('This is a demo to send email notification via script');//Set Body
email.addRecipient('hacktoberfest2024@servicenow.com');//Add Recipients
email.save();
