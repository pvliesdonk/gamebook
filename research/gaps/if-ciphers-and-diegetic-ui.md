# IF Ciphers & Diegetic UI Props — Phase 3 gap research

> Phase 3 Task 4 research note. Corpus-silent cells: Ciphers-&-Codes·IF, Digital-Props·IF.
> Provenance: [researched] (cited) · [synthesis]. Not rendered.

## Ciphers & Codes · IF

The corpus treats ciphers as physical/print artefacts; digital IF (parser and choice) instead
embeds them as *in-text* puzzles, where the governing constraint is fairness rather than
craftsmanship of the artefact.

- The canonical fairness standard in IF puzzle design is that "an ideally perceptive player
  could win on his or her first attempt, without recourse to saved games" — i.e. all
  information a cipher demands must be discoverable inside normal play, not from
  out-of-game knowledge or trial-and-error reloads. [researched][1]
- The classic failure mode for cipher-as-gate is the puzzle whose solution depends on a
  visual pun, an obscure reference, or an inside joke; "when that familiarity is needed to
  solve a puzzle, the game may become unplayable." A cipher keyed on knowledge the player
  cannot obtain in-fiction is precisely this trap. [researched][1]
- The recommended structural defence against hard-gating is Mike Roberts' rule that "a
  player should always be able to find a locked door before he finds the key" — the player
  should meet the encrypted text (the problem) before being expected to produce the
  decoding (the solution), so the cipher motivates exploration rather than blocking it. [researched][1]
- The exemplary fair-cipher pattern is *Avon*'s substitution code, which is "insoluble, but
  which it is possible to make partial deductions about: just enough to solve the problem at
  hand." This is the key design move: the player never has to fully break the cipher, only
  to infer the fragment the immediate puzzle needs — so a stuck player can still progress on
  partial information. [researched][1]
- Decipherment / constructed-language puzzles are an established IF tradition cited approvingly
  in the same craft literature (e.g. *Edifice*'s invented Nalian language, *Infidel*'s
  hieroglyphics), confirming that codes are a recognised parser puzzle class rather than a
  novelty. [researched][1]
- [synthesis] The cross-media translation from the corpus's *physical* cipher (a printed
  artefact the reader decodes by hand) to *digital IF* is the affordance question: a parser/
  choice work can supply an in-fiction decoding helper (a found cipher key, a partial-decode
  command, an optional hint tier) that the print artefact cannot, and the fairness literature
  above implies it usually *should* — gating progress on a fully manual break is the cipher
  equivalent of the unfair locked door.

## Digital Props · IF

The corpus "digital-props" note covers chips-embedded-in-physical-objects only; in IF the live
craft category is the *diegetic interface* — the prop is the screen, terminal, or fake OS the
player operates, and the player is cast as its in-fiction user.

- A diegetic interface is one whose UI elements exist *within the game world itself* rather
  than as an authorial overlay; the "fake OS" subgenre is defined as games where "a major
  part of the game simulates an actual device and/or operating system" as the core loop —
  desktops, phones, browsers, consoles. [researched][2][3]
- *Her Story* is the load-bearing exemplar: the entire game is a simulated late-90s police
  database terminal, and "the conceit of making the computer itself a prop in the game was
  so neat." The player is cast as someone sitting at that terminal — their real device "plays
  the part of the fictional computer" — and the only operating instructions are themselves
  diegetic, embedded as a ReadMe file on the simulated desktop. [researched][4]
- The search mechanic is deliberately framed as a diegetic act: Barlow modelled it on Google
  so the player is "essentially Googling," with minimal transcoding between the real input
  gesture and the in-fiction one. The fiction is enforced by interface limits, not menus —
  e.g. a keyword returns at most the first five matching clips, gating the narrative through
  the prop's own rules. [researched][4][5]
- *Hypnospace Outlaw* pushes the fake-OS prop further: the game takes place entirely inside a
  simulated 1990s OS (Windows-95-era retraux look) that boots with an audible whir, can be
  infected by viruses that cause "interface screws," and crashes if run too long. The prop's
  *malfunctions* become narrative and mechanical events. [researched][6]
- *Return of the Obra Dinn* shows the diegetic-prop craft outside a fake OS: the player's
  deduction tool is an in-fiction book (the *Memento Mortem* logbook) that ships with a route
  map, crew manifest, and sketches, and whose blank pages the player fills in as the diegetic
  pocket-watch reveals each death — the interface and the detective's own notebook are the
  same object. [researched][7]
- The recognised craft payoff is dual: diegetic interfaces "leverage players' existing
  real-world device knowledge," making the work accessible "especially for non-gamers," while
  letting designers weaponise *broken* OS behaviour (crashes, glitches, fourth-wall breaks) as
  authored beats. The interface "dissolves the boundary between game UI and game world." [researched][3]
- [synthesis] For IF specifically, the diegetic-prop move maps cleanly onto both parser and
  choice forms: a simulated terminal *is* a parser (typed commands as in-world input), and a
  fake phone/desktop *is* a choice interface (tapping in-world affordances). The corpus's
  physical "chip in an object" prop and the IF diegetic interface are the same idea on either
  side of the screen — a device the player operates in-fiction — and the IF-side craft lesson
  is that the prop's own constraints (search caps, boot quirks, glitches) should carry the
  gating and the drama, rather than an out-of-world menu.

## Sources

[1] Graham Nelson, *The Inform Designer's Manual (DM4)* §50, "The design of puzzles."
    http://inform-fiction.org/manual/html/s50.html (accessed 2026-06)
[2] "150+ Developers Push to Define a New 'Fake OS' Genre on Steam," 80.lv.
    https://80.lv/articles/150-developers-push-to-define-a-new-fake-os-genre-on-steam (accessed 2026-06)
[3] "Diegetic Interface," TV Tropes.
    https://tvtropes.org/pmwiki/pmwiki.php/Main/DiegeticInterface (accessed 2026-06)
[4] "Barlow's (Her) Story: Interactivity, Immersion, and Authorship," Interactive Media Archive.
    https://interactivemediaarchive.wordpress.com/barlows-her-story-interactivity-immersion-and-authorship/ (accessed 2026-06)
[5] Emily Short, "Her Story (Sam Barlow)," Emily Short's Interactive Storytelling.
    https://emshort.blog/2015/06/24/her-story-sam-barlow/ (accessed 2026-06)
[6] "Hypnospace Outlaw," Steam store page.
    https://store.steampowered.com/app/844590/Hypnospace_Outlaw/ (accessed 2026-06)
[7] "Return of the Obra Dinn," Wikipedia.
    https://en.wikipedia.org/wiki/Return_of_the_Obra_Dinn (accessed 2026-06)
