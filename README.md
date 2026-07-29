# PHYS 220 Audio Flashcards

Audio flashcards for PHYS 220. Each card plays a spoken question and answer. You rate how well you knew it, and the app tracks what to review.

Topics: Newton's laws and forces, circular motion, work and energy, momentum and impulse. 32 cards total.

Works offline after the first load. Progress is saved in your browser.

## Use it

Open the site in a browser. Tap a card to flip it and see the answer. Use the play buttons to hear the question or answer again.

After you reveal the answer, rate the card:

- **Miss** — you didn't know it; it comes back soon
- **Shaky** — partial credit; it stays in rotation
- **Nailed** — you knew it; it moves toward mastered

Filter by topic with the chips at the top. Turn on **Due only** to focus on cards that need review. Turn on **Autoplay** to hear the question, then the answer, automatically.

## Run locally

No build step. Serve the folder with any static file server, or open `index.html` in a browser (some features need a local server for the service worker).

```bash
npx serve .
```

Then open `http://localhost:3000`.

## Deploy

Static site. Push to GitHub and connect the repo to Vercel (or Netlify, GitHub Pages, etc.). The entry point is `index.html` at the root.

## Add to your phone

Open the site in Safari (iOS) or Chrome (Android). Use the browser's "Add to Home Screen" option. It installs as a standalone app and caches content for offline use.

## Project layout

```
index.html          App UI and card data
manifest.json       PWA manifest
service-worker.js   Offline caching
phys220-audio/      Question and answer MP3s (01_q.mp3, 01_a.mp3, ...)
icons/              App icons for home screen
```
