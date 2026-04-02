import { applyRowLayout, applyColumnLayout } from "./layout.js";
import { removeExistingElement } from "../helpers/dom/query.js";
import { removeMinimumSizes } from "./sizing.js";

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
 * Inject Bubble Up styles into the document head.
 */
function injectStyles() {
	removeExistingElement("#bubble-up-styles");

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
 * Render a single UI schema node.
 *
 * @param  {object}  node
 *     A schema node.
 *
 * @returns {string}
 */
function renderNode(node) {
	if (node.type === "button") {
		return `
			<button id="bubble-up-button-${node.id}" class="bubble-up-button">
				${node.label}
			</button>
		`;
	}

	if (node.type === "group") {
		return `
			<dl class="bubble-up-group">
				<dt>${node.label}</dt>
				<dd class="bubble-up-group__children">
					${node.children.map(renderNode).join("")}
				</dd>
			</dl>
		`;
	}

	return "";
}

/**
 * Attach click handlers defined in the schema.
 *
 * @param  {array}  schema
 *     The UI schema.
 */
function attachEvents(schema) {
	for (const node of schema) {
		if (node.type === "button") {
			const button = document.getElementById(
				`bubble-up-button-${node.id}`
			);

			if (button) {
				button.addEventListener("click", node.onClick);
			}

			continue;
		}

		if (node.type === "group") {
			attachEvents(node.children);
		}
	}
}

/**
 * Mount the Bubble Up UI into the Bubble editor toolbar.
 *
 * @param  {array}  schema
 *     The UI schema.
 */
function mountUI(schema) {
	removeExistingElement("#bubble-up-ui");

	const wrapper = document.createElement("div");

	wrapper.id = "bubble-up-ui";
	wrapper.innerHTML = schema.map(renderNode).join("");

	const componentLibraryButton = document.querySelector("[aria-label=\"Component Library\"]");

	if (!componentLibraryButton) {
		return;
	}

	componentLibraryButton
		.parentElement
		.insertAdjacentElement("afterend", wrapper);

	attachEvents(schema);
}

/**
 * Initialise the Bubble Up UI.
 */
export function initialiseUI() {
	injectStyles();
	mountUI(uiSchema);
}
