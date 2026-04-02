/**
 * Bubble editor section selectors.
 */
export const sections = {
	layout: ".pe-section[data-section-title=\"Layout\"]",
};

/**
 * Bubble editor element selectors.
 */
export const elements = {
	layout: {
		buttonRow: `${sections.layout} button[aria-label=\"Row\"]`,
		buttonColumn: `${sections.layout} button[aria-label=\"Column\"]`,
		inputColumnGap: "#field_column_gap",
		inputRowGap: "#field_row_gap",
	},

	sizing: {
		buttonFitWidth: "[data-prop-name=\"fit_width\"] button",
		buttonFitHeight: "[data-prop-name=\"fit_height\"] button",
		optionFit: "[data-popper-positioner] [data-key=\"Fit\"]",
		inputMinWidth: "[data-prop-name=\"min_width_css\"] input",
		inputMinHeight: "[data-prop-name=\"min_height_css\"] input",
	},
};
