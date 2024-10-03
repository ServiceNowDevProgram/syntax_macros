(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {

    //Fetch latest comment and notify

    var comments = current.comments.getJournalEntry(1);
    template.print(comments);

})(current, template, email, email_action, event);
