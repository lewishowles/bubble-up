import { getElement } from "./query.js";
import { showError } from "../utilities/log.js";

/**
 * Click a DOM element.
 *
 * @param  {string}  selector
 *     The selector of the element to click.
 */
export function clickElement(selector) {
	const element = getElement(selector);

	if (!element) {
		showError(`Could not click on element with selector "${selector}".`);

		return;
	}

	element.click();
};
