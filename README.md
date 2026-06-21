# Before I start - Permira onboarding questions

A single, mobile-first, Permira-branded page Ben Rogers (and optionally other Permira people) fills in before Freddie's summer 2026 AI-enablement internship. Answers post into a Google Sheet. Grounded in OB Fair Process (process before outcome): align on how we work and what good looks like, up front.

## Files
- `index.html` - the page (self-contained, inline CSS, one web font).
- `apps-script.gs` - the Google Sheet backend.
- `assets/` - Permira wordmark + ascending-bars favicon (from the redeck brand cache).

## Brand
Permira identity: indigo `#272560` + orange `#E67C25`, Graphik (Inter/Helvetica/Arial fallback), sans-only, ascending-bars mark, generous white space. Source: `~/.claude/brands/permira.md`.

## Setup (the ~2-minute Google step)
1. Create a new Google Sheet (e.g. "Permira - Before I start").
2. Extensions -> Apps Script. Delete the stub, paste all of `apps-script.gs`, Save.
3. Deploy -> New deployment -> type **Web app**. Execute as: **Me**. Who has access: **Anyone**. Deploy, authorise.
4. Copy the Web App URL (ends `/exec`).
5. Paste it into `index.html` as `SCRIPT_URL` (replacing `REPLACE_WITH_APPS_SCRIPT_URL`).
6. Sanity-check: open the `/exec` URL in a browser - should return `{"status":"ok",...}`.

## Deploy (GitHub Pages)
```bash
cd ~/Projects/permira-onboarding
git add -A && git commit -m "Permira onboarding page"
gh repo create freddiecaspian/permira-onboarding --public --source=. --push
gh api -X POST /repos/freddiecaspian/permira-onboarding/pages -f "source[branch]=main" -f "source[path]=/"
```
Live at `https://freddiecaspian.github.io/permira-onboarding/` (allow ~60-90s to build).

## Reuse
Same link works for Chris Pell / David Kovara / CX - the Name + Role fields tag each respondent; all answers land in the one Sheet.
