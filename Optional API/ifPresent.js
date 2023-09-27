/*
ifPresent(Function fn)
Applies a function to the record within an Optional object. If the Optional object does not contain a record, the function does not execute.

*/


var user = new global.GlideQuery('sys_user')
.where('sys_id', 'f682abf03710200044e0bfc8bcbe5d38')
.selectOne('zip')
.ifPresent(function (user) {
    gs.info('Zip Code: ' + user.zip);
});