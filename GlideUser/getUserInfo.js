//Macro can be used to get the information about the current user
var user = gs.getUser();  // Get the current user object
gs.info("Current User Sys ID: " + user.getID());
gs.info("Current User Name: " + user.getFullName());
gs.info("Current User Email: " + user.getEmail());
