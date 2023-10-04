/*
isEmpty()
Returns true if the Optional object is empty.

*/


var checkEmpty = new global.GlideQuery('sys_user')
.where('last_name', 'Barker')
.selectOne()
.isEmpty();

gs.info(checkEmpty);
