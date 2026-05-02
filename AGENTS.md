# Portfolio

Vite + React + Tailwind CSS portfolio for Minh An.

## Dev Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # lint with ESLint flat config
npm run preview  # preview build
```

## Testing

```bash
npm run cypress:open   # open Cypress UI
npm run cypress:run    # run tests headlessly
```

Cypress tests: `cypress/e2e/*.cy.js`

## Architecture

- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`
- Components: `src/components/*.jsx`
- Content: `src/constants/index.js` (NAV_LINKS, TIMELINE_DATA, PROJECTS, CONTACT_INFO)
- Styling: Tailwind utilities + `src/index.css` (global styles)
- Public assets: `public/` (icons, favicons)

## Custom Design Tokens

Defined in `tailwind.config.js`:
- Colors: `accent` (#d4af37), `dark-bg` (#0f1111), `glass-bg`, `glass-border`
- Fonts: `serif` (Old Standard TT), `sans` (Roboto)

## Dependencies

- `framer-motion` — animations
- `lucide-react` — icons
- `react` / `react-dom`
