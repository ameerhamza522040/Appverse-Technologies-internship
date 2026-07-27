# CSS Token Component Set

**Appverse Technologies — Frontend Development Internship, Phase 1**
**Mini Project 07 — Ameer Hamza (JUL26-FE13-45)**

A small, framework-free component set built entirely on CSS custom
property design tokens, with a scalable, ITCSS-inspired file structure,
BEM-named components, and a light/dark theme switch driven from the
document root.

## Running it

No build step. Open `index.html` in a browser, or serve the folder with
any static server, e.g.:

```
npx serve .
```

## Folder structure

```
css-token-component-set/
├── index.html                 the token + component showcase page
├── css/
│   ├── main.css                single entry point — imports every layer in order
│   ├── showcase.css             one-off layout rules for this demo page only
│   ├── 00-tokens/                the raw design decisions — nothing below may hard-code these
│   │   ├── _colors.css
│   │   ├── _typography.css
│   │   ├── _spacing.css
│   │   ├── _radius.css
│   │   └── _shadows.css
│   ├── 01-base/                  element defaults, no classes
│   │   ├── _reset.css
│   │   └── _base.css
│   ├── 02-utilities/             single-purpose layout/spacing classes (utility-first layer)
│   │   └── _utilities.css
│   └── 03-components/            reusable, BEM-named UI pieces
│       ├── _button.css
│       ├── _card.css
│       ├── _form.css
│       └── _toggle.css
└── js/
    └── theme.js                theme persistence + toggle wiring
```

The import order in `main.css` is deliberate and mirrors the 7-1 /
ITCSS pattern covered in the earlier "CSS Architecture" assignment:
broad, low-specificity rules (tokens, reset, base) are loaded first,
narrower rules (utilities, then components) are layered on after, so a
later rule overriding an earlier one is always an intentional part of
the architecture rather than an accident of file order. In a
production build these files would typically be bundled by a build
tool; native `@import` is used here so the layering stays visible
file-by-file for review.

## Naming convention

Components follow **BEM** (Block, Element, Modifier):

- Block: `.btn`, `.card`, `.form__group` root, `.theme-toggle`
- Element: `.card__title`, `.form__input`, `.theme-toggle__thumb`
- Modifier: `.btn--primary`, `.card--featured`, `.form__input--error`

Page-level layout and spacing use a small **utility-first** layer
(`.u-flex`, `.u-gap-md`, `.u-container`, `.u-grid--3`, …) instead of
one-off component classes, since layout composition changes far more
often than a component's own internal styling — this mirrors the
hybrid approach described as a common real-world compromise between
the two methodologies.

## Tokens

All five requested token categories live in `css/00-tokens/`:

| Category   | File               | Notes |
|------------|--------------------|-------|
| Color      | `_colors.css`      | Brand color stored as HSL parts so hover/active shades are derived with `calc()` on lightness, not hand-picked hex values. |
| Typography | `_typography.css`  | Font-size scale built with `clamp(min, preferred, max)` for fluid, breakpoint-free sizing. |
| Spacing    | `_spacing.css`     | Every step is `calc(var(--space-unit) * N)`; component paddings (`--space-card-padding`, `--space-input-padding-y`) are themselves composed from two scale steps via `calc()` rather than hard-coded. |
| Radius     | `_radius.css`      | Simple fixed scale, `--radius-xs` through `--radius-full`. |
| Shadow     | `_shadows.css`     | Redefined per theme — dark surfaces use lower-opacity, darker-ambient shadows rather than reusing the light values. |

## Dark mode

Dark mode is implemented purely by re-declaring the same custom
property **names** under `[data-theme="dark"]` on `<html>` — no
component file contains any theme-specific logic or duplicate rules.
`js/theme.js`:

1. Reads a saved preference from `localStorage`, falling back to the
   OS-level `prefers-color-scheme`.
2. Applies it as `data-theme` on `<html>` **before first paint** (via
   a small inline script in `<head>`) to avoid a flash of the wrong
   theme.
3. Wires the `#theme-toggle` switch to flip the attribute and persist
   the choice.

## Components built

- **Button** (`.btn`) — primary / secondary / ghost / danger variants, small / large sizes, disabled state.
- **Card** (`.card`) — header, title, subtitle, body, footer, status badges, a `--featured` modifier.
- **Form** (`.form__*`) — labeled text/email/tel inputs, a select, a textarea, a styled checkbox, helper text, and an error-state modifier.
- **Theme toggle** (`.theme-toggle`) — the interactive piece that demonstrates the whole token system flipping live.

## Accessibility notes

- The theme toggle is a real `<button>` with `role="switch"` and
  `aria-checked`, so it is announced and operable exactly like a
  native switch.
- Focus states use a token-driven `box-shadow` (`--shadow-focus`)
  rather than removing the outline outright.
- `prefers-reduced-motion` is respected in the reset layer.
