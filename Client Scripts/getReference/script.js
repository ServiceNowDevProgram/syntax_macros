var  ans = g_form.getReference('field_name', doAlert);  // You can select any 'field name' just make sure the field is reference field  &&  doAlert is a callback function

function doAlert(ans) { 
var res = ans.field_name_2; //  field_name_2 is any field on the referenced record.
}
