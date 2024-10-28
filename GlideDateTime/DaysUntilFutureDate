// Initialize the current date and time
var currentDate = new GlideDateTime();

// Set the future date (e.g., '2023-12-31 00:00:00')
var futureDate = new GlideDateTime('2023-12-31 00:00:00');

// Calculate the difference in milliseconds
var diff = GlideDateTime.subtract(futureDate, currentDate);

// Convert the difference to days
var daysUntil = Math.floor(diff.getNumericValue() / (1000 * 60 * 60 * 24));

// Log the result
gs.info('Days until future date: ' + daysUntil);
