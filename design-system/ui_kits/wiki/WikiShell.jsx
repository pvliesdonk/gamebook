/* WikiShell — the persistent chrome around every view: a slim masthead
   with the guide wordmark + header search, and a left nav rail listing
   the five taxonomic sections. Holds the app's view state and routes
   between BrowseView and ArticleView. Exposed as window.WikiApp. */
const { useState: useShellState } = React;

function Masthead({ onHome }) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const { SearchInput, Icon } = DS;
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 24,
      padding: '0 28px', height: 60,
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--paper)', position: 'sticky', top: 0, zIndex: 10,
    }}>
      <button onClick={onHome} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 0, cursor: 'pointer', padding: 0 }} title="The Gazetteer — all entries">
        <Icon name="feather" size={20} style={{ color: 'var(--amber)' }} />
      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 19, color: 'var(--ink)', letterSpacing: '-0.01em' }}>The Field Guide</span>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber-ink)', alignSelf: 'center', paddingTop: 1 }}>Narrative &amp; Game Design</span>
      </button>
      <div style={{ marginLeft: 'auto', width: 280 }}>
        <SearchInput placeholder="Search the guide…" />
      </div>
    </header>
  );
}

function NavRail({ sections, currentSection, onPick }) {
  const { Icon } = window.FieldGuideDesignSystem_df43d1;
  return (
    <nav style={{
      width: 248, flexShrink: 0, borderRight: '1px solid var(--border-hairline)',
      background: 'var(--surface-rail)', padding: '28px 16px', alignSelf: 'stretch',
    }}>
      <div style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-faint)', padding: '0 10px', marginBottom: 12 }}>
        Taxonomy
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {sections.map((s) => {
          const on = s.id === currentSection;
          return (
            <li key={s.id}>
              <button
                onClick={() => onPick(s.id)}
                style={{
                  width: '100%', textAlign: 'left', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 10px', borderRadius: 'var(--radius-sm)',
                  border: 0, background: on ? 'var(--amber-tint)' : 'transparent',
                  borderLeft: '2px solid ' + (on ? 'var(--amber)' : 'transparent'),
                  fontFamily: 'var(--font-serif)', fontSize: 15,
                  color: on ? 'var(--amber-ink)' : 'var(--ink-soft)',
                  transition: 'background var(--dur-fast) var(--ease-paper)',
                }}
                onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'var(--paper-warm)'; }}
                onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'transparent'; }}
              >
                <Icon name={s.icon || 'feather'} size={16} style={{ color: 'var(--fam-' + s.id + ')' }} />
                <span style={{ flex: 1 }}>{s.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)' }}>{s.count}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function WikiApp() {
  const data = window.WIKI_DATA;
  const BrowseView = window.BrowseView;
  const ArticleView = window.ArticleView;
  const PartView = window.PartView;
  const [view, setView] = useShellState({ kind: 'part', section: 'puzzles' });

  const open = (id) => {
    const entry = data.entries.find((e) => e.id === id);
    if (entry) { setView({ kind: 'article', id, section: entry.family || (view.section) }); window.scrollTo(0, 0); }
  };
  const home = () => { setView({ kind: 'browse', section: view.section }); window.scrollTo(0, 0); };
  const goPart = (section) => { setView({ kind: 'part', section }); window.scrollTo(0, 0); };

  const entry = view.kind === 'article' ? data.entries.find((e) => e.id === view.id) : null;
  // Fallback for stub entries with no body: synthesize a minimal one.
  const fullEntry = entry && !entry.body
    ? { ...entry, body: [{ type: 'lead', text: entry.silhouette }, { type: 'p', text: 'This specimen is catalogued but its full field-record is still being written. Its place in the cross-link graph is already fixed.', prov: 'corpus' }], backlinks: [] }
    : entry;
  const activeSection = view.kind === 'article' ? (entry && entry.family) : view.section;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <Masthead onHome={home} />
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <NavRail sections={data.sections} currentSection={activeSection} onPick={goPart} />
        <main style={{ flex: 1, minWidth: 0 }}>
          {view.kind === 'browse' && <BrowseView data={data} onOpen={open} />}
          {view.kind === 'part' && <PartView family={view.section} data={data} onOpen={open} />}
          {view.kind === 'article' && <ArticleView entry={fullEntry} data={data} onOpen={open} />}
        </main>
      </div>
    </div>
  );
}

window.WikiApp = WikiApp;
