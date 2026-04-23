import { showWarning } from "./log.js";

/**
 * Wait for an element to exist in the DOM.
 *
 * @param  {string}  selector
 *     The selector to wait for.
 *
 * @returns {Promise<Element>}
 */
export function waitForElement(selector) {
	return new Promise(resolve => {
		const existingElement = document.querySelector(selector);

		if (existingElement) {
			resolve(existingElement);

			return;
		}

		const timeoutId = setTimeout(() => {
			showWarning(`waitForElement("${selector}") — still waiting after 5s, selector may have changed.`);
		}, 5000);

		const observer = new MutationObserver(() => {
			const foundElement = document.querySelector(selector);

			if (!foundElement) {
				return;
			}

			clearTimeout(timeoutId);
			observer.disconnect();

			resolve(foundElement);
		});

		observer.observe(document.documentElement, {
			childList: true,
			subtree: true,
		});
	});
}
