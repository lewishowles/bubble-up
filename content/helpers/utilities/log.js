/**
 * Show a formatted message in the console.
 *
 * @param  {"log"|"warn"|"error"}  type
 *     The console method to use.
 * @param  {string}  message
 *     The message to display.
 */
function showLog(type, message) {
	console[type](`🫧 [bubble-up]: ${message}`);
}

/**
 * Show an error message.
 *
 * @param  {string}  message
 *     The message to display.
 */
export function showMessage(message) {
	showLog("log", message);
}

/**
 * Show an error message.
 *
 * @param  {string}  message
 *     The message to display.
 */
export function showError(message) {
	showLog("error", message);
}

/**
 * Show a warning message.
 *
 * @param  {string}  message
 *     The message to display.
 */
export function showWarning(message) {
	showLog("warn", message);
}
