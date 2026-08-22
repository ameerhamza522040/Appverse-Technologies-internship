# Ameer Hamza — Portfolio

A responsive personal portfolio website built with plain HTML5, CSS3, and vanilla
JavaScript — no frameworks, no build tools, no backend.

Built as the "Responsive Grid Portfolio" internship assignment.

## Project Structure

```
Ameer-Hamza-Portfolio/
├── index.html              # All page markup (semantic HTML5)
├── css/
│   ├── style.css            # Design tokens, reset, base (mobile-first) layout, hero grid
│   ├── components.css        # Buttons, pills, cards, timeline, grids, container query
│   └── responsive.css        # Mobile-first min-width breakpoints (600 / 768 / 1024 / 1280px)
├── js/
│   └── script.js             # Nav toggle, active-link highlight, scroll reveal, back-to-top, copy email
├── assets/
│   ├── images/                # Reserved for future project screenshots
│   └── icons/                 # Reserved for future custom icon assets
└── README.md
```

## How to Run

No build step required. Either:

1. Double-click `index.html` to open it directly in a browser, or
2. Serve it locally for the best experience (recommended, since some
   browsers restrict certain features on `file://`):

   ```bash
   # Python 3
   python -m http.server 5500

   # then open http://localhost:5500
   ```

## Assignment Requirements — Where to Find Them

| Requirement | Implementation |
|---|---|
| CSS Grid named template areas | `.hero__grid` in `css/style.css` (mobile stack) + overridden in `css/responsive.css` at 768px (two-column layout with `grid-template-areas`) |
| Responsive project/card grid | `.card-grid` in `css/components.css` — `repeat(auto-fit, minmax(260px, 1fr))`, becomes a fixed 3-column grid at desktop in `css/responsive.css` |
| Flexbox navigation | `.navbar` in `css/style.css` (`display: flex; justify-content: space-between`) |
| Flexbox card actions | `.project-card__actions` and `.exp-card__actions` in `css/components.css` |
| Mobile-first responsive breakpoints | Base styles in `style.css`/`components.css` target mobile; `css/responsive.css` layers `min-width` queries at 600px, 768px, 1024px, 1280px |
| Real CSS container query | `.card-grid` is a container (`container-type: inline-size`); `@container card-grid (min-width: 420px)` in `css/components.css` restyles `.project-card` internals based on the card's own available width, not the viewport |

## Sections

Navbar → Hero → About → Skills → Featured Projects → Experience → Education →
Certifications → Currently Exploring → Contact → Footer.

## Accessibility Notes

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`
- Skip-to-content link for keyboard users
- Visible focus states (`:focus-visible`) on all interactive elements
- `prefers-reduced-motion` respected for scroll reveals and smooth scrolling
- Descriptive `aria-label`/`aria-expanded` on the mobile nav toggle

## Content

All content (name, project, experience, education, certifications, contact info)
reflects real information provided for this project. No placeholder or fabricated
achievements, statistics, or testimonials are included.

## Author

**Ameer Hamza**
Software Engineering Student — University of Gujrat
[GitHub](https://github.com/ameerhamza522040) ·
[LinkedIn](https://www.linkedin.com/in/ameer-hamza-051374404/) ·
[Email](mailto:ameer.hamza276000@gmail.com)
