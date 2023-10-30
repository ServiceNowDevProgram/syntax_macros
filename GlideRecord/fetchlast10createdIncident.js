/* Fetch last 10 created Incidents */
var latestinc =new GlideRecord("incident");
latestinc.orderByDesc("sys_created_on");
latestinc.setLimit(10);
latestinc.query();
while(latestinc.next())
{
    gs.info(latestinc.getDisplayValue());
}
