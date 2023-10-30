/*Logic if you want to perform automation with Admin Profile need to utilise session Impersonate Explained with an use case where we need to Add users to group based on the Request , In request we get the group data and members to be added*/
var grScReqItem = new GlideRecord('sc_req_item');
if (grScReqItem.get(current.sys_id)) {
    var grp = grScReqItem.variables.Group, // Getting group details from catalog replace your variable
        addCheck = grScReqItem.variables.addmemberlist, //Getting Member to be added from variable
     
    var usersArr;
	var currentuser = gs.getUserID();
	var adminprofile= gs.getProperty('xyz') // Create an System Property to Store the Admin profile Sysid 
	var imperuser = gs.getSession().impersonate(adminprofile)// Impersonating to "Admin" to operate the adding members in the group

    if (grp) {
        if (addCheck) {
            usersArr = addCheck.toString();

            if (usersArr.length > 32) {
                usersArr = usersArr.split(',');
                for (var i in usersArr) {
                    addUserToGroup(usersArr[i], grp);
                }
            } else {
                usersArr = addCheck;
                addUserToGroup(usersArr, grp);
            }
        }

//Validating if user is part of group or not

function validateUser(user, grp) {
    var grSUG = new GlideRecord('sys_user_grmember');
    grSUG.addEncodedQuery("group=" + grp + "^user=" + user);
    grSUG.query();
    if (grSUG.hasNext()) {
        return true;
    } else {
        return false;
    }
}
// Adding Member to Group
function addUserToGroup(user, grp) {
    var check = validateUser(user, grp);
    if (!check) {
        var gr = new GlideRecord('sys_user_grmember');
        gr.initialize();
        gr.user = user;
        gr.group = grp;
        gr.insert();
    }
}
 gs.getSession().impersonate(currentuser); // Unimpersonating 
