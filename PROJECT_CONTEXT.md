# Reform Training Context

Last updated: 2026-05-06, update 2

## What This Is

Reform Training is a mobile-first, online-first workout tracker PWA for shared gym progress. It is a static HTML/CSS/JS app with Supabase as the shared backend.

Main URLs:
- Local: `http://localhost:4173/`
- GitHub repo: `https://github.com/sveeetch/reform-training`
- GitHub Pages: `https://sveeetch.github.io/reform-training/`

## Stack

- Static app: `index.html`, `styles.css`, `app.js`
- PWA: `manifest.json`, `sw.js`, `icon.svg`
- Backend: Supabase REST table `workout_state`
- Config: `config.js`
- SQL setup: `supabase.sql`

Supabase project:
- URL: `https://jruzuqzfdzqyhpejbnjq.supabase.co`
- Public key is in `config.js`
- Do not ask for or store Supabase secret/service role keys in this repo.

## Users And Programs

Default users:
- `Dima`
- `Dasha`
- `Artem`
- `Danil`
- `Guest`

Dima, Artem, Danil, and Guest use the Reform fullbody program. Dasha has a separate glute/lower-body focused program.

Exercise names should be visible as Russian plus English in parentheses, for example:
`Жим штанги лежа (Barbell bench press)`.

## Current Product Behavior

- User selector is a dropdown with a small edit icon.
- User rename, delete, and add guest live in a user dialog.
- Destructive actions use in-app confirmation dialogs, not browser `confirm` or `alert`.
- Training days can be added, renamed, deleted, and reset.
- Exercises can be edited, replaced, reordered, skipped during active sessions, and opened in a media dialog.
- Each exercise has a `Фото` action that opens a dialog with a preview plus Google Images and YouTube links.
- Completed workouts in History can be copied as plain text for notes/messengers.
- History rows should show session status plus start/end time, not total volume.
- Selected user is shareable through a URL query parameter: `?user=Dima`, `?user=Dasha`, etc.
- Set completion uses a compact check button (`✓`). Completed set rows are visually muted, like crossed-off work, instead of highlighted green.
- Service worker cache currently must be bumped when deploying visible app changes.

## Important UX Preferences

- Mobile-first, not hover-first.
- Avoid dense cramped controls.
- Use progressive disclosure: keep the main workout surface simple, move management actions into dialogs.
- Completed set rows should feel “done and out of focus”, not highlighted as the next thing to do.
- History should show useful timing information: start and finish are more useful than total volume in the row.

## GitHub Workflow Memory

`gh` is installed at:
`/Users/ds/.local/bin/gh`

The user authenticated `gh` for GitHub account `sveeetch` with repo/workflow scopes.

If GitHub auth or device confirmation is required again:
- Tell the user clearly that action is needed.
- Play a macOS notification sound if possible, e.g. `afplay /System/Library/Sounds/Ping.aiff`.
- Open the browser/device auth URL when `gh auth login` provides one.

## PWA Install Notes

On iPhone, adding the app to the Home Screen is done through Safari, not Chrome:
1. Open `https://sveeetch.github.io/reform-training/` in Safari.
2. Tap Share.
3. Tap `Add to Home Screen`.
4. Tap `Add`.

Chrome on iOS usually does not expose the same Add to Home Screen flow because iOS routes this through Safari/WebKit UI.

When explaining this to the user, keep it short:
`На iPhone открой ссылку именно в Safari -> Share -> Add to Home Screen. В Chrome iOS этой кнопки обычно нет.`

## Apple Watch / Apple Health Notes

A pure PWA cannot directly read/write Apple Watch or HealthKit workout data. Apple Watch sync requires a native iOS/watchOS app using HealthKit and possibly WorkoutKit. Practical options:
- Short term: manually copy/export workout summaries from the PWA.
- Real integration: build an iOS app wrapper that talks to Supabase and HealthKit.
- Full watch experience: build iOS + watchOS apps with Apple Developer Program, Xcode, HealthKit permissions, and App Review compliance.

## Working Rule

After meaningful changes, update this file with new decisions, deployment details, and important user preferences.
