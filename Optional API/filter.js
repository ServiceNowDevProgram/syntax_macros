/*
filter(Function predicate)
Applies a predicate function, a function that takes a single value and returns true or false, to the record inside the Optional object. If the function returns true, the method returns the Optional record unchanged. If the function returns false, it returns an empty Optional object.

*/

var filteredQuery = new global.GlideQuery('sys_user')
.getBy({ sys_id: 'f682abf03710200044e0bfc8bcbe5d38' }, ['phone'])
.filter(function (user) {
    return phoneRegex.test(user.phone);
});