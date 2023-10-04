/*
lazy(Function lazyGetFn)
Returns a new Optional object. Instead of containing the record, the object contains a function to get the record that is only called if and when requested in the code.
Use this method to delay getting the value until it's needed. You might do this if requesting the value from a slow source and don't want to slow down your code unnecessarily. Otherwise, you can return an Optional object using the GlideQuery and Stream APIs.

*/


var userOptional = global.Optional.lazy(function () {
var userGr = new GlideRecord('sys_user');
userGr.setLimit(1);
userGr.query();
return userGr.next() ? userGr.getUniqueValue() : null;
});

gs.info(userOptional);
