# Bubble Up

**Bubble Up** is a small browser extension that smooths over some of the friction in the Bubble.io editor UI.

It exists purely to improve day-to-day productivity when working inside the Bubble editor by automating repetitive UI interactions and exposing a few common layout actions directly in the editor toolbar.

This extension is **not published** to any browser store and is intended for **personal, local use**.

---

## What it does

Bubble Up currently adds a small UI to the Bubble editor that allows you to:

- Quickly switch selected groups between **Row** and **Column** layouts
- Apply a sensible default gap when converting layouts (without overwriting existing values)
- Remove default **minimum width / height** values that Bubble applies to certain elements (e.g. buttons)

---

## Installation

### Chrome

1. Clone or download this repository to your machine.

2. Open Chrome and navigate to `chrome://extensions`.

3. Enable **Developer mode** (top-right toggle).

4. Click **Load unpacked**.

5. Select the **root folder of this project** (the folder containing `manifest.json`).

6. Open (or refresh) a Bubble editor page matching `https://bubble.io/page?*`.

---

### Firefox

Firefox requires extensions to be signed before they can be installed persistently. The `web-ext` tool handles this via Mozilla's AMO unlisted signing — the extension stays private and never appears on the add-ons site.

#### One-time setup

1. Install dependencies:

   ```sh
   bun install
   ```

2. Generate AMO API credentials at `https://addons.mozilla.org/developers/addon/api/key/`.

3. Add the credentials to your shell environment (e.g. `~/.zshrc`):

   ```sh
   export WEB_EXT_API_KEY="your-jwt-issuer"
   export WEB_EXT_API_SECRET="your-jwt-secret"
   ```

#### Signing and installing

1. Sign the extension:

   ```sh
   bun run firefox:sign
   ```

   This produces a signed `.xpi` file in `web-ext-artifacts/`.

2. Open Firefox and navigate to `about:addons`.

3. Click the gear icon → **Install Add-on From File...**.

4. Select the `.xpi` from `web-ext-artifacts/`.

5. Open (or refresh) a Bubble editor page matching `https://bubble.io/page?*`.

---

## Updating the extension

### Chrome

1. Go to `chrome://extensions`.
2. Click **Reload** on the Bubble Up card.
3. Refresh the Bubble editor page.

If you change `manifest.json`, remove and re-add the extension to be safe.

---

### Firefox

#### During development (temporary, auto-reloading)

```sh
bun run firefox:run
```

This launches a temporary Firefox instance with the extension loaded. Changes to extension files are detected and reloaded automatically — no manual steps needed.

#### Releasing an update (persistent install)

Re-sign and reinstall whenever you want to update the persistent installation:

```sh
bun run firefox:sign
```

Then reinstall the new `.xpi` from `web-ext-artifacts/` via **Install Add-on From File...** in `about:addons`.

---

## Available scripts

| Script | Description |
|---|---|
| `bun run firefox:run` | Launch Firefox with the extension loaded temporarily (auto-reloads on file changes) |
| `bun run firefox:sign` | Sign the extension via AMO unlisted signing, producing a persistent `.xpi` |
| `bun run firefox:build` | Build a plain `.zip` of the extension without signing |

---

## Disclaimer

This project is **not affiliated with Bubble**.

It relies on Bubble's current editor DOM structure and may break if Bubble changes its UI.
