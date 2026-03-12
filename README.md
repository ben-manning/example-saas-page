# Sassify — Example SaaS Landing Page

A sample SaaS marketing page built to practice modern front-end design patterns in HTML, CSS, and vanilla JavaScript.

## About the Project

This project simulates a real-world SaaS product landing page — including a responsive navigation, hero section, features grid, and a three-tier pricing section. The goal is to apply common UI/UX conventions used in production SaaS products while keeping the stack simple and dependency-free.

## Technologies

| Technology | Role |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Layout, responsive design, component styling |
| Vanilla JavaScript | Mobile nav toggle, accessibility attributes |

**CSS Approach:**
- BEM naming convention (`block__element--modifier`)
- CSS custom properties (design tokens for spacing, typography, color)
- Mobile-first responsive layout using media queries
- Eric Meyer CSS reset as the baseline

## Workflow

1. **Structure first** — write semantic HTML for each section before touching CSS
2. **Mobile styles as the base** — default styles target mobile; desktop enhancements are added inside `min-width` media queries
3. **Design tokens before components** — define spacing, color, and typography in `:root` CSS custom properties, then reference them in component styles
4. **BEM for components** — each section (`.hero`, `.features`, `.pricing`) is a self-contained block with its own elements and modifiers
5. **JavaScript last** — only add JS for behaviour that can't be handled in CSS; keep it vanilla and scoped to specific components