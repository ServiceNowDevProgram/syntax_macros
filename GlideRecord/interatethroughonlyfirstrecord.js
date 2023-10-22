// Set the Priority field value to 4 (Low priority) for the first record in the GlideRecord

// Updat ethe record in the Database

if(xyz.next())
{
  xyz.priority = 4; // 'yxz' is object name
  xyz.update();
}
