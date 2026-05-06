# Project Rules

- Keep `PROJECT_CONTEXT.md` updated after every meaningful product, architecture, deployment, integration, or workflow change.
- When the user says "пойми контекст", read `PROJECT_CONTEXT.md` first, then inspect the current git diff/status before changing code.
- If a GitHub/auth/browser confirmation needs the user's action, notify clearly, play a local macOS sound when possible, and open the relevant browser/auth URL when it is available.
- Prefer mobile-first UX decisions. Avoid hover-only interactions because the app is primarily used on phones.
- Keep destructive actions behind in-app confirmation dialogs.
