/*Check whether the current date time is greater than start date time and less than end date time. add start and end date as per your need*/
var getCurrentDate = new GlideDateTime(); //getting the current date
var start = '2023-08-08 05:55:13'; 
var end = '2023-08-10 05:55:13';   
if((getCurrentDate > start) && (getCurrentDate < end)){  //comparing the current date
    gs.print(start);
    gs.print(end)
}
else{
gs.print(getCurrentDate);
}
