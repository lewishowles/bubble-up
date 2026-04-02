bootstrapBubbleUp();

/**
 * We use a bootstrap method and use our `app.js` to really initialise the app
 * because Chrome extensions cannot have ES Module imports in the root file, but
 * all other files can. This means that we can keep this function minimal, and
 * only use the quirky imports to get to our main entry point.
 */
async function bootstrapBubbleUp() {
	try {
        const { bootstrap } = await import(chrome.runtime.getURL("content/app.js"));

        bootstrap();
	} catch (error) {
		console.warn("🫧 [bubble-up] Failed to initialise Bubble Up. It may mean that Bubble's builder UI has changed.", error);
	}
}
