import { showError } from "../utilities/log.js";

/**
 * Retrieve an element from the page.
 *
 * @param  {string}  selector
 *     The selector of the element to retrieve.
 *
 * @returns {Element|null}
 */
export function getElement(selector) {
	const element = document.querySelector(selector);

	if (!element) {
		showError(`Could not find element with selector "${selector}".`);
	}

	return element;
};

/**
 * Remove an element from the DOM, if it exists.
 *
 * @param  {string}  selector
 *     The selector for the element to remove.
 */
export function removeExistingElement(selector) {
	const element = document.querySelector(selector);

	if (!element) {
		return;
	}

	element.remove();
};
