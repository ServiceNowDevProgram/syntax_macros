// iterate through all records in the GlideRecord and set the Priority field value to 4 (low priority)
//Update the record in the database

while(ObjectName.next())
{
ObjectName.priority = 4;
ObjectName.update();  //Query through all records and update the priority as 'Low' (p4)
}
