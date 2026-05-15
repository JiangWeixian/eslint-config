# Design System Reference

Built-in Raycast-inspired dark theme. Copy CSS variables and rules verbatim into generated HTML.

## CSS Variables

```css
:root {
  --bg-void: #07080a;
  --surface-100: #101111;
  --surface-card: #1b1c1e;
  --border: rgba(255, 255, 255, 0.06);
  --border-visible: rgba(255, 255, 255, 0.1);
  --text-primary: #f9f9f9;
  --text-secondary: #cecece;
  --text-tertiary: #9c9c9d;
  --text-dim: #6a6b6c;
  --text-dark: #434345;
  --accent-red: #FF6363;
  --accent-blue: hsl(202, 100%, 67%);
  --accent-green: hsl(151, 59%, 59%);
  --accent-yellow: hsl(43, 100%, 60%);
  --glow-blue: hsla(202, 100%, 67%, 0.15);
  --glow-red: hsla(0, 100%, 69%, 0.15);
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
}
```

## Typography

Global: `font-feature-settings: 'calt', 'kern', 'liga', 'ss03'`, `-webkit-font-smoothing: antialiased`.

Positive letter-spacing (+0.2px) on body text is deliberate. Never use negative tracking.

| Role | Size | Weight | Tracking | Notes |
|------|------|--------|----------|-------|
| Page heading (h2) | 22px | 400 | 0px | Detail panel title |
| Body text | 14px | 500 | +0.2px | Summary, descriptions |
| Step title | 14px | 600 | +0.2px | Accent color |
| Step counter | 12px | 600 | 0px | Muted |
| File tag | 12px | 600 | 0px | Card surface bg |
| Code | 13px (mono) | 400 | +0.2px | Geist Mono |
| Button | 14px | 600 | +0.3px | Nav buttons |
| Badge | 12px | 600 | 0px | Top bar language tag |
| Zoom button | 18px | — | — | +/- symbols |

## Color Roles

| Token | Usage |
|-------|-------|
| `--bg-void` | Page canvas, code block background, map area |
| `--surface-100` | Detail panel, start guide, zoom buttons |
| `--surface-card` | Badge, file tags |
| `--border` | All dividers (0.06 opacity) |
| `--border-visible` | Interactive element borders (0.1 opacity) |
| `--text-primary` | Headings, high-emphasis text |
| `--text-secondary` | Body text, explanations |
| `--text-tertiary` | Zoom buttons, secondary navigation |
| `--text-dim` | Disabled states, placeholders |
| `--text-dark` | Code line numbers |
| `--accent-red` | Flow highlight animation, brand accent |
| `--accent-blue` | Step titles, code highlights, explanation border |
| `--glow-blue` | Code highlight background, explanation background |

## Shadows

**Code blocks** — double-ring containment:
```css
box-shadow: rgb(27, 28, 30) 0px 0px 0px 1px,
            rgb(7, 8, 10) 0px 0px 0px 1px inset;
```

**Primary buttons** — macOS-native press:
```css
box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset,
            rgba(255, 255, 255, 0.25) 0px 0px 0px 1px,
            rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
```

**Secondary buttons** — subtle inset:
```css
box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset;
```

**Start guide** — floating panel depth:
```css
box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px 2px,
            rgba(255, 255, 255, 0.19) 0px 0px 14px;
```

**Active node glow**:
```css
filter: drop-shadow(0 0 12px rgba(255, 99, 99, 0.4));
```

## Buttons

- Background: `hsla(0, 0%, 100%, 0.06)` (primary), `transparent` (secondary)
- Text: `--text-primary` (primary), `--text-dim` (secondary, brightens to white on hover)
- Radius: 6px
- Hover: `opacity: 0.6` transition — no color swaps
- Secondary hover: `color: --text-primary` + `opacity: 0.6`

## Border Radius

| Element | Radius |
|---------|--------|
| Code block | 12px |
| Start guide | 8px |
| Explanation box | 8px |
| Buttons, file tags | 6px |
| Zoom buttons | 6px |
| Code line highlight | 3px |

## Spacing

Base unit 8px. Key spacings:
- Panel padding: 20px–24px
- Section borders: `1px solid var(--border)`
- Nav button gap: 8px
- File tag gap: 6px
## Code Scrollbars

All code teaching surfaces render as `pre.code-block` and use the shared dark scrollbar rules in `_essay.css`. Keep scrollbar styling on the common selector so `code-walk`, `compare`, `guess-first`, and storyboard drawers stay visually consistent.
