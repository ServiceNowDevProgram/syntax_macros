var mail = new GlideEmailOutbound();
mail.setReplyTo('testing@example.com');
mail.setFrom('developer@example.com');
mail.setSubject('ServiceNow Testing'); //setting the subject
mail.addAddress('cc', 'admin@example.com','John Snow'); //specify the address and name
mail.setBody('Hello world!');//sets the email body contents
//mail.addRecipient('hacktoberfest@example.com');//Undocumented in ServiceNow docs but works in global scope.
mail.save();//Triggeres the outbound notification
