# Voltaire Research

The public website for Voltaire Research, an independent computational research studio exploring intelligence, markets, sound and planetary systems.

The site is intentionally static and dependency-free. GitHub Pages deploys it automatically from `main`.

## Local preview

Run any static server from the repository root, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `/research/` — initiative directory
- `/research/nocturne/` — computational market intelligence
- `/research/cortex/` — artificial and biological intelligence
- `/research/overture/` — machine intelligence for music
- `/research/orbital/` — planetary intelligence systems
- `/publications/` — publication index
- `/index/` — institutional archive
- `/about/` — institutional description

Initiative content is defined in `data.js` and rendered through a shared initiative template. The four scientific visuals are locally stored, generated illustrations and are labeled accordingly.

## Overture early-access form

The current early-access form is interface-only and does not store or transmit submissions. Connect it to a private form service or database before collecting real signups.
