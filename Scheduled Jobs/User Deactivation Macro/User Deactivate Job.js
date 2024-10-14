var userGR = new GlideRecord('sys_user');
userGR.addQuery('last_login_time', '<', gs.daysAgoStart(90)); // Change to desired days
userGR.addQuery('active', true);
userGR.query();

while (userGR.next()) {
    userGR.active = false;
    userGR.update();
}
