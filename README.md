# Voltaire Research

The public website for Voltaire Research, an independent AI laboratory exploring intelligence for music.

The site is intentionally static and dependency-free. GitHub Pages deploys it automatically from `main`.

## Local preview

Run any static server from the repository root, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Waitlist delivery

GitHub Pages cannot securely store form submissions on its own. The current form opens a pre-addressed email confirmation. Replace the handler in `site.js` with a dedicated form provider or API endpoint when the waitlist backend is chosen.
