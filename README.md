# Digital_heroes_internship-project


# NorthPeak Digital — one-page agency site

Built for the Digital Heroes Web Development internship task kit (Role 05, Task A + B).

## Live site
`<add your deployed URL here>`

## Stack
Vanilla HTML, CSS, and JavaScript — no framework, no page builder, no build step. Fonts are loaded from Google Fonts (Space Grotesk, Inter, JetBrains Mono).

## Running locally
No build step needed. Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying
Any static host works. Quickest options:
- **Netlify**: drag the folder into the Netlify dashboard, or connect the GitHub repo.
- **Vercel**: `vercel` CLI in this folder, or import the repo at vercel.com.
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch, root folder.

## Design decisions

1. **The "alpenglow" accent instead of a flat brand color.** NorthPeak's whole identity is built on elevation — basecamp, ascent, summit. Alpenglow is the warm amber-to-coral light that hits a peak at dawn before anywhere else does, so the gradient (used sparingly, only on the primary CTA and pricing highlight) is doing brand work, not just decoration.

2. **Named pricing tiers instead of "Basic / Pro / Enterprise."** Basecamp / Ascent / Summit map directly to how far along a client's growth is, which gives the sales copy a reason to exist beyond filling three boxes.

3. **One signature visual, kept quiet everywhere else.** The topographic contour lines drawing in on the hero are the one moment of flourish. Everything after that — services, results, pricing, the form — is deliberately restrained, so the hero doesn't get lost in competing effects.

## Accessibility notes
- Semantic landmarks throughout (`header`, `nav`, `main`, `section`, `footer`)
- Skip-to-content link for keyboard users
- Visible focus states on all interactive elements
- Form fields have associated `<label>`s and live error regions (`role="alert"`)
- Color pairs were checked against WCAG AA (4.5:1 for text, 3:1 for UI components) — see the contrast notes in the Task B changelog
- Hero contour animation respects `prefers-reduced-motion`

## Ai was used
- it was used to to ceate the javascript part and the styling of the website.
