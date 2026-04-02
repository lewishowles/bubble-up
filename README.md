# Bubble Up

**Bubble Up** is a small Chrome extension that smooths over some of the friction in the Bubble.io editor UI.

It exists purely to improve day-to-day productivity when working inside the Bubble editor by automating repetitive UI interactions and exposing a few common layout actions directly in the editor toolbar.

This extension is **not published** to the Chrome Web Store and is intended for **personal, local use**.

---

## What it does

Bubble Up currently adds a small UI to the Bubble editor that allows you to:

- Quickly switch selected groups between **Row** and **Column** layouts
- Apply a sensible default gap when converting layouts (without overwriting existing values)
- Remove default **minimum width / height** values that Bubble applies to certain elements (e.g. buttons)

---

## Installation (local / unpacked)

Because this extension is **not published**, it must be installed manually as an unpacked extension.

### Steps

1. Clone or download this repository to your machine.

2. Open Chrome and navigate to
   `chrome://extensions`

3. Enable **Developer mode** (top-right).

4. Click **Load unpacked**.

5. Select the **root folder of this project** (the folder containing `manifest.json`).

6. The extension should now appear in the list and will automatically run on Bubble editor pages.

7. Open (or refresh) a Bubble editor page matching
   `https://bubble.io/page?*`

---

## Updating the extension

After making changes to the code:

1. Go back to `chrome://extensions`
2. Click **Reload** on the Bubble Up extension
3. Refresh the Bubble editor page

If you change `manifest.json`, it’s safest to remove and re-add the extension.

---

## Disclaimer

This project is **not affiliated with Bubble**.

It relies on Bubble’s current editor DOM structure and may break if Bubble changes its UI. When that happens, fixes are typically isolated to selector definitions or Bubble interaction helpers.
