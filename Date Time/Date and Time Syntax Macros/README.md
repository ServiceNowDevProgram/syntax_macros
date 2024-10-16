**1. Get the Current Date and Time:**
**Explanation:**
• Purpose: Retrieves the current date and time based on the system’s time zone.
• Class Used: GlideDateTime is a ServiceNow class designed to handle date and time operations with time zone awareness.
• Usage Scenario: Useful when you need to timestamp an event, log the current time, or perform operations based on the current moment.

**Additional Details:**
• The GlideDateTime object contains both date and time information.
• It automatically handles time zones, ensuring that the date and time are accurate relative to the user’s or system’s settings.
• You can further manipulate this object using various methods (e.g., adding days, formatting).

**2. Get Only the Current Date**
**Explanation:**
• Purpose: Retrieves only the current date without the time component.
• Class Used: GlideDate is a ServiceNow class focused solely on date operations.
• Usage Scenario: Ideal when you need to work with dates without considering the specific time, such as setting due dates or filtering records by date.

**Additional Details:**
• The getLocalDate() method returns the date in the local time zone of the system.
• This object does not store time information, making it lighter for scenarios where time is irrelevant.

**3. Get Only the Current Time
Explanation:**
• Purpose: Retrieves the current time without the date component.
• Class Used: GlideTime is a ServiceNow class designed to handle time-specific operations.
• Usage Scenario: Useful for scenarios where only the time of day matters, such as logging the time an action occurred or scheduling tasks based on time.

**Additional Details:**
• The GlideTime object holds time in a 24-hour format.
• It does not account for time zones, as it solely represents the time of day.

**4. Set a Specific Date and Time
Explanation:**
• Purpose: Initializes a GlideDateTime object with a specific date and time.
• Class Used: GlideDateTime.
• Usage Scenario: When you need to create a date-time object representing a fixed point in time, such as setting a scheduled time for an event or comparing against other dates.

**Additional Details:**
• The string passed to the constructor should be in a recognized date-time format ("yyyy-MM-dd HH:mm:ss" is common).
• If the input string lacks time zone information, it is assumed to be in the system’s local time zone.
• You can also set dates dynamically using other methods if needed.

**5. Add or Subtract Time from a Date
Explanation:**
• Purpose: Modifies a GlideDateTime object by adding or subtracting time units such as days, hours, minutes, or seconds.
• Class Used: GlideDateTime.
• Usage Scenario: Useful for calculating future or past dates, setting deadlines, or adjusting timestamps based on certain conditions.

**Additional Details:**
• Methods Available:
• addDays(number): Adds the specified number of days.
• addSeconds(number): Adds (if positive) or subtracts (if negative) the specified number of seconds.
• Similar methods exist for other time units, such as addMonths, addYears, etc.
• These methods modify the original GlideDateTime object.

**6. Format the Date**
**Explanation:**
• Purpose: Converts a GlideDateTime object into a string with a specified format.
• Class Used: GlideDateTime.
• Usage Scenario: Essential when displaying dates and times in a user-friendly format, logging, or interfacing with systems that require specific date formats.

**Additional Details:**
• getByFormat(formatString): Returns the date-time as a string formatted according to the provided pattern.
• Common Format Specifiers:
• yyyy: 4-digit year
• MM: 2-digit month
• dd: 2-digit day
• HH: 2-digit hour (24-hour format)
• mm: 2-digit minutes
• ss: 2-digit seconds
• ServiceNow follows Java’s SimpleDateFormat patterns for formatting.

**7. Get the Difference Between Two Dates (in Milliseconds)
Explanation:**
• Purpose: Calculates the time difference between two GlideDateTime objects in milliseconds.
• Class Used: GlideDateTime.
• Usage Scenario: Useful for measuring durations, time intervals, or for performing time-based calculations such as SLA (Service Level Agreement) compliance.

**Additional Details:**
• GlideDateTime.subtract(date1, date2): Static method that returns a GlideDuration object representing the difference.
• GlideDuration.getMilliseconds(): Returns the total difference in milliseconds.
• You can also retrieve differences in other units, such as seconds, minutes, or days, using corresponding methods.

Example Use Case:
var date1 = new GlideDateTime("2024-10-01 08:00:00");
var date2 = new GlideDateTime("2024-10-16 08:00:00");
var duration = GlideDateTime.subtract(date2, date1);
var differenceInMilliseconds = duration.getMilliseconds();
gs.info("Difference in Milliseconds: " + differenceInMilliseconds);

**Note:**
• If you need the difference in more human-readable units, you can perform additional calculations. For example, to get the difference in days:

var differenceInDays = duration.getDurationValue() / (1000 * 60 * 60 * 24);
gs.info("Difference in Days: " + differenceInDays);

**8. Convert a String to a Date**
**Explanation:**
• Purpose: Converts a string representation of a date into a GlideDate object.
• Class Used: GlideDate.
• Usage Scenario: Useful when receiving date input as a string (e.g., from user input, APIs) and needing to manipulate it as a date object.

**Additional Details:**
• setValue(value): Sets the value of the GlideDate object based on the provided string.
• The input string should be in a recognized date format, typically "yyyy-MM-dd".
• After conversion, you can perform date operations or validations on the GlideDate object.

Example Use Case:

var dateString = "2024-10-16";
var date = new GlideDate();
date.setValue(dateString);
gs.info("Converted GlideDate: " + date);

Error Handling:

• If the input string is not in a valid format, GlideDate may default to an incorrect date or throw an error, depending on the context. It’s advisable to validate the input format before conversion.

**9. Compare Two Dates**
**Explanation:**
• Purpose: Compares two GlideDateTime objects to determine their chronological order.
• Class Used: GlideDateTime.
• Usage Scenario: Essential for conditional logic based on dates, such as validating deadlines, scheduling tasks, or triggering actions based on date comparisons.

**Additional Details:**
• Comparison Methods:
• before(otherDateTime): Returns true if the invoking date-time is before the otherDateTime.
• after(otherDateTime): Returns true if the invoking date-time is after the otherDateTime.
• compareTo(otherDateTime): Returns -1, 0, or 1 depending on whether the invoking date-time is before, equal to, or after the otherDateTime.
• Ensure both dates are in the same time zone or properly normalized before comparison to avoid discrepancies.

**10. Get the Beginning or End of the Day**
**Explanation:**
• Purpose: Retrieves the starting (00:00:00) or ending (23:59:59) GlideDateTime of a specific day.
• Class Used: GlideDateTime.
• Usage Scenario: Useful for querying records within a specific day, setting boundaries for date-based operations, or resetting times for comparisons.

**Additional Details:**
• Methods Used:
• getStartOfDay(): Returns a new GlideDateTime object set to the beginning of the day.
• getEndOfDay(): Returns a new GlideDateTime object set to the end of the day.
• setDisplayValue(dateString): Sets the date based on a string input, typically in the "yyyy-MM-dd" format. The time is set to 00:00:00 by default.
• The returned GlideDateTime objects can be used in queries or further manipulated as needed.
