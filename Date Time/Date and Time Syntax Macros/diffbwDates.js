var date1 = new GlideDateTime("2024-10-01 08:00:00");
var date2 = new GlideDateTime("2024-10-16 08:00:00");
var difference = GlideDateTime.subtract(date2, date1).getMilliseconds();
