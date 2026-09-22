# Voltaire Research

The public website for Voltaire Research, an independent AI laboratory exploring intelligence for music.

The site is intentionally static and dependency-free. GitHub Pages deploys it automatically from `main`.

## Local preview

Run any static server from the repository root, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Temporary waitlist storage

GitHub Pages cannot securely store form submissions on its own. The current waitlist stores entries only in the submitting browser's local storage and can export those local entries as JSON. It is intended for testing and must be replaced with a private database or form backend before collecting signups from real visitors.
