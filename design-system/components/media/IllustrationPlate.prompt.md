A mounted naturalist engraving frame. Use it on entry headers, browse cards, and section openers so the guide reads like an illustrated field book rather than a docs site. Shows a "plate to come" placeholder until real art exists; pass `src` to drop in the finished engraving.

```jsx
<IllustrationPlate figure="Fig. 14" caption="The locked diorama, after Pope." ratio={0.62} tone="moss" />
<IllustrationPlate src="assets/plates/dread.png" alt="…" figure="Fig. 22" tone="clay" />
```

`ratio` sets the frame shape (0.62 landscape, ~1.3 portrait). `tone` colours the hatch + figure label to match the entry's medium or section.
