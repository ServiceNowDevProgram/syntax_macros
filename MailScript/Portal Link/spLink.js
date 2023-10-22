//Print current record link that take user to Service Portal.
var url = '<a href="' + gs.getProperty('glide.servlet.uri') + 'sp?id=ticket&table=' + current.sys_class_name + '&sys_id=' + current.sys_id + '">'+current.number+'</a>';  //Replace sp with your portal.
template.print(url);
