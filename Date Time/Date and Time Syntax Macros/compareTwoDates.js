var date1 = new GlideDateTime("2024-10-01 08:00:00");
var date2 = new GlideDateTime("2024-10-16 08:00:00");
if (date1.before(date2)) {
    gs.info('Date 1 is before Date 2');
}

