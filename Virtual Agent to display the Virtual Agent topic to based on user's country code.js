(function execute() {
    /* Return true or false to indicate the branch condition's applicability.
       For example:

       var applies = vaInputs.first_name == 'Bill' ? true : false;
       return applies;
    */
    var user1= vaInputs.user.getValue();
   var gruser=new GlideRecord('sys_user');
   gruser.addQuery('sys_id',gs.getUserID());
   gruser.addEncodedQuery('u_hr_country_code=MAC');//Example: Country code MAC for Macau country
   gruser.query();
   if(gruser.next()){
    return true;
   }
})()

