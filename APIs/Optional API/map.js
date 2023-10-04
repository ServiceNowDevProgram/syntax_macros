/*
map(Function fn)
Applies a function to the result of a query.
*/


var value = new global.GlideQuery('sys_user')
.whereNotNull('first_name')
.selectOne('first_name')
.map(function (user) {
        return user.first_name.toUpperCase();
});

gs.info(value);
