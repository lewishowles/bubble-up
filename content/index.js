bootstrapBubbleUp();

async function bootstrapBubbleUp() {
	try {
		const { waitForElement } = await import(
			chrome.runtime.getURL("content/helpers/utilities/wait.js")
		);

		const { initialiseUI } = await import(
			chrome.runtime.getURL("content/features/ui.js")
		);

		await waitForElement("[aria-label=\"Component Library\"]");

		initialiseUI();
	} catch (error) {
		console.warn("🫧 [bubble-up] Failed to initialise Bubble Up:", error);
	}
}
