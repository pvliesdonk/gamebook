Icons from **Phosphor (Thin weight)**, inlined and tuned to sit with the Jenson serif, for wayfinding, the six families, and the four media. Inherits `currentColor`; never decorative.

```jsx
<Icon name="search" size={18} />
<Icon name="puzzles" size={20} style={{ color: 'var(--amber-ink)' }} />
<Icon name="tabletop" label="Tabletop game" />
```

Names: `search` `arrow-right` `arrow-left` `corner-down-right` `check` `feather` `map` `list`; families `structure` `puzzles` `story` `players` `space` `systems`; media `if` `live` `tabletop` `hunt`. The repo ships no icon set — Phosphor (MIT) is the chosen substitute; its thin filled-line cut pairs with the serif. To extend, copy the inner path from `assets/thin/<name>-thin.svg` in the Phosphor repo into `PATHS`.
