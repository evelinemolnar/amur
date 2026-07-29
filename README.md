# AMUR — Mediterranean wellness, bottled

Storefront for AMUR: a daily 25 ml shot of Tuscan extra virgin olive oil, Amalfi lemon, wild
mint and fleur de sel. React 19 + TypeScript + Vite, with react-router for routing.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run lint
```

## Routes

| Path            | Page                                                             |
| --------------- | ---------------------------------------------------------------- |
| `/`             | Home — hero, manifesto, evidence teaser, lifestyle, shop preview  |
| `/shop`         | Product grid with category filters                               |
| `/product/:id`  | PDP — gallery, one-time vs. subscription, accordions             |
| `/wellness`     | The evidence — compounds, fasted-dose rationale, EFSA references |
| `/ritual`       | The 60-second ritual player and morning scheduler                |
| `/story`        | Brand story                                                      |
| `/subscribe`    | Subscription plans                                               |
| `/checkout`     | Prototype checkout and order confirmation                        |

## Structure

- `src/data/catalog.ts` — the single source of truth for products, pricing, copy blocks
  (accordions, ritual steps, morning schedule) and the money/discount helpers.
- `src/cart/` — cart state. `context.ts` holds the context and types, `CartProvider.tsx` the
  provider, `useCart.ts` the hook. Free delivery unlocks at €49.
- `src/components/` — announcement bar, nav + mobile menu, cart drawer, product card, footer.
- `src/routes/` — one component + one stylesheet per page.
- `src/styles/tokens.css` — palette, type and rhythm variables; `src/index.css` holds the
  reset, keyframes and the shared `.wrap` / `.section` / `.btn` / `.eyebrow` primitives.
- `public/assets/` — product and editorial photography.

Breakpoints are 1000px (two-column layouts collapse) and 760px (grids go single-column, the
nav switches to the burger menu, the PDP gains a sticky add-to-bag bar).

## Notes

Checkout is a prototype: no payment is processed and no order is placed. Pricing, reviews,
ratings and nutritional values are placeholder pending final formulation.
