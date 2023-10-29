//Inactive all the users who is having the ITIL Role
     
var gr = new GlideRecord('sys_user_has_role'); 
gr.addQuery('role','itil'); //getting users with ITIL role
gr.query();
while(gr.next()){
    var deactivate = new GlideRecord('sys_user');
    deactivate.addQuery('sys_id',gr.user);
    deactivate.query();
    if(deactivate.next()){
        deactivate.active = false;
        deactivate.update()
    }
}
