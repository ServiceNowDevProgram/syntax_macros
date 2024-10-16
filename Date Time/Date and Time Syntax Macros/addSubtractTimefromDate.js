var dateTime = new GlideDateTime();
dateTime.addDays(5);
gs.info("Date after adding 5 days: " + dateTime.getDisplayValue());

dateTime.addSeconds(-3600);  // Subtract 1 hour
gs.info("Date after subtracting 1 hour: " + dateTime.getDisplayValue());

