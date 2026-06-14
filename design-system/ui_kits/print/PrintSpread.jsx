/* PrintSpread — the bound-edition (Typst/PDF) face of the guide: a
   two-page spread on a desk. Left page closes the previous entry with
   its exemplar plate; right page opens a new entry with running header,
   drop-cap lead, a hazard callout and footnotes. Pure typographic
   recreation — this is what the PDF looks like, not an interactive app.
   Exposed as window.PrintSpread. */

function RunningHeader({ side, part, page }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline',
      flexDirection: side === 'left' ? 'row' : 'row-reverse',
      borderBottom: '1px solid var(--rule-strong)',
      paddingBottom: 8, marginBottom: 26,
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)' }}>{page}</span>
      <span style={{
        flex: 1,
        textAlign: side === 'left' ? 'left' : 'right',
        paddingLeft: side === 'left' ? 14 : 0, paddingRight: side === 'right' ? 14 : 0,
        fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600,
        letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>{part}</span>
    </div>
  );
}

const FAMILIES = ['structure','puzzles','story','players','space','systems'];

function BleedTabs({ active, activeNumber }) {
  return (
    <div style={{ position: 'absolute', top: 54, right: -16, display: 'flex', flexDirection: 'column', gap: 4 }} aria-hidden="true">
      {FAMILIES.map((f, i) => (
        <div key={f} style={{
          width: f === active ? 26 : 16, height: 34,
          background: 'var(--fam-' + f + ')',
          borderRadius: '0 3px 3px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '1px 1px 2px rgba(40,30,14,0.14)',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#fff', opacity: 0.9 }}>{f === active ? (activeNumber || String.fromCharCode(65 + i)) : String.fromCharCode(65 + i)}</span>
        </div>
      ))}
    </div>
  );
}

function Page({ side, family, tabs, children }) {
  return (
    <div data-family={family} style={{
      position: 'relative',
      width: 420, minHeight: 580, background: 'var(--paper-pure)',
      padding: '40px 46px',
      boxShadow: side === 'left'
        ? 'inset -22px 0 30px -28px rgba(40,30,14,0.28), var(--shadow-plate)'
        : 'inset 22px 0 30px -28px rgba(40,30,14,0.28), var(--shadow-plate)',
      borderRadius: side === 'left' ? '3px 0 0 3px' : '0 3px 3px 0',
    }}>
      {tabs && <BleedTabs active={family} activeNumber="XVI" />}
      {children}
    </div>
  );
}

function PrintSpread() {
  return (
    <div style={{
      minHeight: '100vh', background: 'var(--paper-deep)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40,
    }}>
      <div style={{ display: 'flex', boxShadow: 'var(--shadow-raised)' }}>
        {/* LEFT — close of previous entry */}
        <Page side="left" family="puzzles">
          <RunningHeader side="left" part="Puzzles · Cluing & Information" page="46" />
          <p style={{ fontSize: 14.5, lineHeight: 1.66, color: 'var(--ink-soft)', margin: '0 0 14px' }}>
            …and so the red herring is not a betrayal of the contract but a clause within it: the design may mislead, provided the misleading is itself fairly clued. The player who is fooled should, on reflection, see exactly where they chose to be fooled.
          </p>
          <div style={{
            border: '1px solid var(--rule-strong)', borderRadius: 3,
            margin: '22px 0', overflow: 'hidden',
          }}>
            <div style={{
              borderBottom: '2px solid var(--rule-strong)', padding: '11px 16px',
              background: 'var(--paper-warm)',
            }}>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 3 }}>Plate XV · Exemplar</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>The Witness</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 12.5, color: 'var(--ink-muted)' }}>Jonathan Blow · 2016</div>
            </div>
            {[['Medium', 'Open-world puzzle'], ['Mechanism', 'Line-drawing grammar'], ['Cluing', 'Environmental rhyme']].map(([k, v], i, a) => (
              <div key={k} style={{ display: 'flex', padding: '8px 16px', borderBottom: i === a.length - 1 ? 'none' : '1px solid var(--border-hairline)' }}>
                <span style={{ width: '42%', fontFamily: 'var(--font-label)', fontSize: 9, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-soft)' }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--border-hairline)', marginTop: 'auto', paddingTop: 8, fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--text-faint)', lineHeight: 1.6 }}>
            <p style={{ margin: 0 }}>14. On triangulation as fairness, see Plate XIV, “The Fairness Contract.”</p>
          </div>
        </Page>

        {/* RIGHT — open of new entry */}
        <Page side="right" family="structure" tabs>
          <RunningHeader side="right" part="The Field Guide" page="47" />
          <div style={{ borderTop: '2px solid var(--amber)', paddingTop: 12, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 7 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--amber-ink)' }}>№ XVI</span>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Structure · Pacing & Energy</span>
            </div>
            <h1 style={{ fontSize: 30, margin: '0 0 8px', lineHeight: 1.08 }}>The Architecture of Dread</h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.32 }}>
              Fear is a tempo, not a monster.
            </p>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.66, color: 'var(--ink-soft)', margin: 0 }}>
            <span style={{ float: 'left', fontFamily: 'var(--font-display)', fontSize: 52, lineHeight: 0.82, fontWeight: 700, color: 'var(--ink)', padding: '4px 8px 0 0' }}>D</span>
            read is built, not summoned. The monster in the dark is a payment; the corridor before it is the loan. A designer who spends the corridor well need barely show the monster at all — the player will have built a worse one in the meantime.
          </p>
          {/* Hazard — printed caution band (symmetric solid rules) */}
          <div style={{ margin: '18px 0' }}>
            <div style={{ height: 0, borderTop: '2px solid var(--clay)' }} aria-hidden="true"></div>
            <div style={{ padding: '9px 0' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)', margin: 0 }}>
                <span style={{ fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--clay-ink)', whiteSpace: 'nowrap' }}>
                  <span style={{ color: 'var(--clay)', paddingRight: 3 }}>‡</span>Hazard.</span>{' '}
                The jump-scare treadmill: when every beat pays out at the same volume, the player re-tunes, and the loan is never felt again.
              </p>
            </div>
            <div style={{ height: 0, borderTop: '2px solid var(--clay)' }} aria-hidden="true"></div>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.66, color: 'var(--ink-soft)', margin: 0 }}>
            The remedy is dynamic range. A whisper is only quiet beside a held breath; a held breath only tense beside a long, unbroken calm…
          </p>
        </Page>
      </div>
    </div>
  );
}

window.PrintSpread = PrintSpread;
