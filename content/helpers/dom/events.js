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

/**
 * Set the value of an input and dispatch input-related events.
 *
 * @param  {string}  selector
 *     The selector of the input to modify.
 * @param  {string}  value
 *     The value to set.
 */
export function setInputValue(selector, value) {
	const input = getElement(selector);

	if (!input) {
		return;
	}

	input.value = value;

	input.dispatchEvent(new Event("input", { bubbles: true }));
	input.dispatchEvent(new Event("change", { bubbles: true }));
};

/**
 * Dispatch a pointer down + up sequence.
 *
 * @param  {Element}  element
 *     The DOM element to dispatch events on.
 */
export function dispatchPointerTap(element) {
	if (!element) {
		return;
	}

	const pointerDown = new PointerEvent("pointerdown", {
		bubbles: true,
		pointerType: "mouse",
		isPrimary: true,
	});

	const pointerUp = new PointerEvent("pointerup", {
		bubbles: true,
		pointerType: "mouse",
		isPrimary: true,
	});

	element.dispatchEvent(pointerDown);
	element.dispatchEvent(pointerUp);
};
