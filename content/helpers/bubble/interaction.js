import { clickElement } from "../dom/interaction.js";
import { getElement } from "../dom/query.js";
import { showError } from "../utilities/log.js";
import { waitForElement } from "../utilities/wait.js";

/**
 * Open a section of the Bubble property editor, if necessary.
 *
 * @param  {string}  selector
 *     The selector of the section to open.
 */
export function openSection(selector) {
	const section = getElement(selector);

	if (!section) {
		return;
	}

	const isExpanded = section.querySelector("[data-header-expanded=\"true\"]");

	if (isExpanded) {
		return;
	}

	const toggle = section.querySelector(".cursor-pointer");

	if (!toggle) {
		showError(`Could not find toggle for Bubble section "${selector}".`);

		return;
	}

	toggle.click();
}

/**
 * Set the value of a Bubble editor input.
 *
 * @param  {string}  selector
 *     The selector of the input to modify.
 * @param  {string}  value
 *     The value to set.
 * @param  {object}  options
 * @param  {string}  currentValue
 *     The value that must be the current value before a value is set.
 */
export function setInputValue(selector, value, { currentValue } = {}) {
	const input = getElement(selector);

	if (!input) {
		showError(`Could not find input with selector "${selector}".`);

		return;
	}

	if (currentValue && input.value !== currentValue) {
		return;
	}

	input.value = value;

	input.dispatchEvent(new Event("input", { bubbles: true }));
	input.dispatchEvent(new Event("change", { bubbles: true }));
}

/**
 * Select a popover option using Bubble's pointer-based interaction model.
 *
 * @param  {string}  triggerSelector
 *     The selector for the trigger that opens the popover.
 * @param  {string}  optionSelector
 *     The selector for the option inside the open popover.
 */
export async function selectPopoverOption(triggerSelector, optionSelector) {
	const trigger = getElement(triggerSelector);

	if (!trigger) {
		return;
	}

	// Bubble popovers require pointer events; click() is insufficient.
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

	trigger.dispatchEvent(pointerDown);
	trigger.dispatchEvent(pointerUp);

	await waitForElement(optionSelector);

	clickElement(optionSelector);
}
