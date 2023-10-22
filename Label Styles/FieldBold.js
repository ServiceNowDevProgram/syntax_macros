//Client Script to bold a field label.
//Replace table.field with your desired table and field name
function onLoad(){
    var l = g_form.getLabel('table.field');
    l.style.fontWeight = 'bold';
}