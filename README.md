# Full Count — installable web app

## Put it online (required — install needs HTTPS)

**Netlify Drop** is the fastest: go to https://app.netlify.com/drop and drag
this whole folder onto the page. You get an HTTPS URL in a few seconds, no
account needed to start.

**GitHub Pages** if you want a stable home: push these files to a repo,
then Settings → Pages → deploy from branch (root).

Opening `index.html` directly from Files will NOT work — service workers
and installation both require a real HTTPS origin.

## Install on the iPhone

1. Open the URL in **Safari** (Chrome on iOS can't install PWAs)
2. Share button → **Add to Home Screen**
3. Launch from the icon — no browser chrome, full screen

Load it once while online so the fonts and assets get cached. After that it
runs with no connection at all.

## What's in here

- `index.html` — shell: storage bridge, safe-area handling, iOS touch fixes
- `app.js` — your game, transpiled from JSX
- `vendor.js` — React 19.2.5, bundled locally
- `tone-shim.js` — Web Audio implementation of the Tone.js API the game uses
- `sw.js` — offline cache
- `manifest.json`, `icons/` — install metadata

## Scores

Stored in `localStorage` under the `fullcount:` prefix, bridged through the
same `window.storage` API the game already called — the game source is
unchanged. Scores persist across launches and survive app updates. They are
per-device and per-browser, and clearing Safari website data erases them.

## Updating the game later

Replace `app.js` with a fresh build and bump `VERSION` in `sw.js` (e.g.
`full-count-v2`). Without that bump, devices keep serving the cached copy.
