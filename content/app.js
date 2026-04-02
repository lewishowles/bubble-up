import { initialiseUI } from "./features/ui.js";
import { waitForElement } from "./helpers/utilities/wait.js";

/**
 * Bootstrap Bubble Up once the Bubble editor is ready.
 */
export async function bootstrap() {
	await waitForElement("[aria-label=\"Component Library\"]");

	initialiseUI();
}
