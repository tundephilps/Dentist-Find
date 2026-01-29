# Practice Summary Card – DentistFind Assessment

## Implementation

- Built with **React 18 + TypeScript**
- Styling: **Tailwind CSS** (via CDN for quick prototyping; in production would use PostCSS setup)
- Self-contained single-file component + small `App` wrapper rendering 3 mock practices
- Includes responsive layout (mobile stacking → desktop 2–3 column grid)
- Features: hover effects, gradient header, dynamic trend sparkline (SVG, no external libs)

## Approach, Code Quality & Decision-Making

### 1. Component & Styling Decisions

- **Structure**: Kept it intentionally simple with one main `PracticeSummaryCard` component + a tiny `Sparkline` sub-component for the trend line. No unnecessary abstraction or folders since the task emphasized a single self-contained component. This makes it easy to understand and copy-paste.
- **Styling choice**: Tailwind CSS utility classes. Reasons: rapid iteration, excellent readability, built-in responsiveness (`sm:`, `lg:` prefixes), and consistent design tokens out of the box. Avoided CSS-in-JS or component libraries to keep bundle size minimal and showcase raw styling skill.
- **Consistency & responsiveness**: Used Tailwind's responsive utilities for mobile-first stacking → multi-column grid. Ensured hierarchy with large bold numbers, uppercase labels, good spacing (p-6, gap-6), high contrast (dark text on white/light bg), and subtle hover states (shadow + translate-y). Sparkline uses dynamic colors (green/red/gray) for quick trend scanning.

### 2. Scaling & Real-World Use

- **Integration into larger PracticeFuel dashboard**: Would wrap cards in a `<DashboardGrid>` or `<PracticeList>` component that maps over fetched data (from API/context). Add prop drilling alternatives like React Context or Zustand for global theme/user prefs. Support multiple views (list vs grid toggle).
- **With one extra day I would have added/change**:
  - Accessibility: ARIA labels, focus states, semantic HTML, contrast checker (WCAG AA)
  - Unit/integration tests (Jest + React Testing Library)
  - Subtle micro-animations (Framer Motion for card entrance/fade)
  - Dark mode support via Tailwind `dark:` classes
  - Real data fetching + loading/error skeletons
  - i18n (react-i18next) for currency/date formatting in different locales

### 3. Time Management

Rough allocation of ~2 hours total:

- Setup (Vite project / Tailwind CDN / TypeScript): 10–12 minutes
- Data model & mock data: 10 minutes
- Card layout & structure: 25–30 minutes
- Metrics formatting & hierarchy: 20 minutes
- Sparkline implementation + trend logic: 20–25 minutes
- Responsiveness, hover polish, final tweaks: 15–20 minutes
- Writing README & explanation: 25–30 minutes

Total: ≈ 125–150 minutes

This was a fun, focused task — thank you for the opportunity!

To run; "npm install" and "npm run dev"
on your terminal
