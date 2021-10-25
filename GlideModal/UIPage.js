//Marco for setting up a modal or dialog window to show a UI Page.

var dialogClass = window.GlideModal ? GlideModal : GlideDialogWindow;
var gm = new dialogClass("example_ui_page");
gm.setTitle("example_title");
gm.setPreference("sysparm_x1", x1);
gm.setPreference("sysparm_x2", x2);
gm.setPreference("sysparm_x3", x3);
gm.setWidth(600);
gm.render();
