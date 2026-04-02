import { clickElement } from "../helpers/dom/interaction.js";
import { openSection, setInputValue } from "../helpers/bubble/interaction.js";
import { sections, elements } from "../helpers/bubble/selectors.js";
import { waitForElement } from "../helpers/utilities/wait.js";

/**
 * Convert the currently selected group to a Row layout.
 * Adds an 8px column gap if no gap is specified.
 */
export async function applyRowLayout() {
	openSection(sections.layout);

	clickElement(elements.layout.buttonRow);

	await waitForElement(elements.layout.inputColumnGap);

	setInputValue(elements.layout.inputColumnGap, "8", { currentValue: "0" });
}

/**
 * Convert the currently selected group to a Column layout.
 * Adds an 8px row gap if no gap is specified.
 */
export async function applyColumnLayout() {
	openSection(sections.layout);

	clickElement(elements.layout.buttonColumn);

	await waitForElement(elements.layout.inputRowGap);

	setInputValue(elements.layout.inputRowGap, "8", { currentValue: "0" });
}
