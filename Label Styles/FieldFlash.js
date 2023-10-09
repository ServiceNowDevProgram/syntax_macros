/* Client Script for flashing field name
Replace table.field with the table name and field name you want to have flash
Replace color with RGB color or acceptable CSS color like "blue" or "tomato"
Integer that determines how long the label flashes:
2 for a 1-second flash
0 for a 2-second flash
-2 for a 3-second flash
-4 for a 4-second flash
*/
function onLoad(){
g_form.flash("table.field","color",0);
}