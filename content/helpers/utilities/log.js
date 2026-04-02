/**
 * Show a formatted message in the console.
 *
 * @param  {"log"|"warn"|"error"}  type
 *     The console method to use.
 * @param  {string}  message
 *     The message to display.
 */
function showMessage(type, message) {
	console[type](`🫧 [bubble-up]: ${message}`);
}

/**
 * Show an error message.
 *
 * @param  {string}  message
 *     The message to display.
 */
export function showError(message) {
	showMessage("error", message);
}

/**
 * Show a warning message.
 *
 * @param  {string}  message
 *     The message to display.
 */
export function showWarning(message) {
	showMessage("warn", message);
}
