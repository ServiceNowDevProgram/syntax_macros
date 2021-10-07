//Check if a given userName & Password combination is Valid in ServiceNow using Background Script.

var userName = “name”; // or gs.getUserName()
var password = "password_for_the_user";
var authed = GlideUser.authenticate(userName, password);
gs.print(authed); //returns true or false.
