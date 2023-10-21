/**
 * This function iterates over each property in a JSON object and logs the key and value.
 *
 * @example
 * // Output:
 * // key1: value1
 * // key2: value2
 * // key3: value3
 */
let jsonObject = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
};

/**
 * Iterates over each property of the jsonObject.
 * Checks if the property is a direct property of the jsonObject,
 * then logs the key and corresponding value to the console.
 */
for (var key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
        console.log(key + ": " + jsonObject[key]);
    }
}
