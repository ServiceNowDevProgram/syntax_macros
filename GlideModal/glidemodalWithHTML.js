/*
Don't need to create an UI Page, if you just wanted to show a message in the modal dialog window. The HTML can be directly passed to renderWithContent function
*/

    var htmlDataToDisplay = '<div class="alert alert-warning" role="alert" style="background-color:#FAC8BF !important;color:#121c4e !important;"><p>THIS IS SAMPLE HTML. ADD YOUR HTML CONTENT HERE. BOOTSTRAP CLASSES WILL ALSO BE SUPPORTED HERE</p></div>';
    var gm = new GlideModal();
    //Sets the dialog title
    gm.setTitle( getMessage('MODAL_WINDOW_TITLE_HERE'));  
    //Opens the dialog with HTML content supplied as input
    gm.renderWithContent(htmlDataToDisplay);
