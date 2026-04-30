import { applyRowLayout, applyColumnLayout } from "./layout.js";
import { removeExistingElement } from "../helpers/dom/query.js";
import { removeMinimumSizes } from "./sizing.js";
import { showError } from "../helpers/utilities/log.js";

/**
 * Declarative schema describing the Bubble Up UI.
 */
const uiSchema = [
	{
		type: "group",
		label: "Align",
		children: [
			{
				type: "button",
				id: "align-row",
				label: "Row",
				onClick: applyRowLayout,
			},
			{
				type: "button",
				id: "align-column",
				label: "Col",
				onClick: applyColumnLayout,
			},
		],
	},
	{
		type: "group",
		label: "Layout",
		children: [
			{
				type: "button",
				id: "remove-min-sizes",
				label: "Remove min. sizes",
				onClick: removeMinimumSizes,
			},
		],
	},
];

/**
 * Reset Bubble Up UI artifacts if they already exist.
 */
function resetUI() {
	removeExistingElement("#bubble-up-styles");
	removeExistingElement("#bubble-up-ui");
}

/**
 * Inject Bubble Up styles into the document head.
 */
function injectStyles() {
	const style = document.createElement("style");

	style.id = "bubble-up-styles";
	style.textContent = `
		#bubble-up-ui {
			display: flex;
			align-items: center;
			gap: var(--b-spacing-md);
		}

		.bubble-up-button {
			white-space: nowrap;
			padding: var(--b-spacing-sm) var(--b-spacing-reg);
			border: 1px solid var(--b-border-default);
			border-radius: var(--b-button-radius);
			color: var(--b-txt-primary);
			background: var(--b-bg);
		}

		.bubble-up-button:hover {
			background-color: var(--b-bg-secondary);
		}

		.bubble-up-group {
			display: flex;
			align-items: center;
			gap: var(--b-spacing-sm);
		}

		.bubble-up-group__children {
			display: flex;
			gap: var(--b-spacing-sm);
		}
	`;

	document.head.appendChild(style);
}

/**
 * Render a single UI schema node into a DOM element.
 *
 * @param  {object}  node
 *     A schema node.
 *
 * @returns {HTMLElement|null}
 */
function renderNode(node) {
	if (node.type === "button") {
		const button = document.createElement("button");

		button.id = `bubble-up-button-${node.id}`;
		button.className = "bubble-up-button";
		button.textContent = node.label;
		button.addEventListener("click", node.onClick);

		return button;
	}

	if (node.type === "group") {
		const dl = document.createElement("dl");
		const dt = document.createElement("dt");
		const dd = document.createElement("dd");

		dl.className = "bubble-up-group";
		dt.textContent = node.label;
		dd.className = "bubble-up-group__children";

		node.children.map(renderNode).forEach(child => dd.appendChild(child));

		dl.appendChild(dt);
		dl.appendChild(dd);

		return dl;
	}

	return null;
}

/**
 * Mount the Bubble Up UI into the Bubble editor toolbar.
 *
 * @param  {array}  schema
 *     The UI schema.
 */
function mountUI(schema) {
	const wrapper = document.createElement("div");

	wrapper.id = "bubble-up-ui";

	schema.map(renderNode).filter(Boolean).forEach(node => wrapper.appendChild(node));

	const componentLibraryButton = document.querySelector("#menubar-zoom-dropdown-btn");

	if (!componentLibraryButton) {
		showError("Could not find element with selector \"#menubar-zoom-dropdown-btn\". The toolbar selector may have changed.");

		return;
	}

	componentLibraryButton
		.parentElement
		.insertAdjacentElement("afterend", wrapper);
}

/**
 * Initialise the Bubble Up UI.
 */
export function initialiseUI() {
	resetUI();

	injectStyles();

	mountUI(uiSchema);
}
