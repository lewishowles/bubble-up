import { elements } from "../helpers/bubble/selectors.js";
import { selectPopoverOption, setInputValue } from "../helpers/bubble/interaction.js";

/**
 * Remove minimum sizes for the currently selected Bubble element.
 * Useful for elements such as buttons which are always created
 * with a minimum width and height.
 */
export function removeMinimumSizes() {
	selectPopoverOption(
		elements.sizing.buttonFitWidth,
		elements.sizing.optionFit
	);

	selectPopoverOption(
		elements.sizing.buttonFitHeight,
		elements.sizing.optionFit
	);

	setInputValue(elements.sizing.inputMinWidth, "0");
	setInputValue(elements.sizing.inputMinHeight, "0");
}
