/* BrowseView — the gazetteer front page: big search, facet rail,
   and a grid of entry plates. Composes DS SearchInput, FilterChip,
   EntryCard. */
const { useState } = React;

function BrowseView({ data, onOpen }) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const { SearchInput, FilterChip, EntryCard, MediaBadge, Icon, IllustrationPlate } = DS;
  const [active, setActive] = useState([]);
  const [query, setQuery] = useState('');
  const featured = data.entries.find((e) => e.body) || data.entries[0];

  const toggle = (id) =>
    setActive((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const entries = data.entries.filter((e) => {
    const q = query.trim().toLowerCase();
    const matchesQ = !q || (e.title + ' ' + (e.silhouette || '')).toLowerCase().includes(q);
    const matchesF =
      active.length === 0 ||
      (e.tags || []).some((t) => active.includes(t.toLowerCase().replace(/ /g, '-')) || active.includes(t.toLowerCase()));
    return matchesQ && matchesF;
  });

  return (
    <div style={{ maxWidth: 940, margin: '0 auto', padding: '40px 44px 88px' }}>
      <div style={{ borderTop: '2px solid var(--amber)', paddingTop: 18, marginBottom: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
          <Icon name="map" size={15} style={{ color: 'var(--amber-ink)' }} />
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
            The Gazetteer
          </span>
        </div>
        <h1 style={{ fontSize: 44, margin: '0 0 8px' }}>Browse the Field Guide</h1>
        <p style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--ink-muted)', maxWidth: '54ch', margin: '0 0 22px' }}>
          Six families — structure, puzzles, story, players, space and systems — each one a specimen pinned to the page.
        </p>
        <SearchInput size="lg" placeholder="Search 204 entries…" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
        {data.facets.map((f) => (
          <FilterChip key={f.id} active={active.includes(f.id)} count={f.count} onClick={() => toggle(f.id)}>
            {f.label}
          </FilterChip>
        ))}
      </div>

      {/* Featured specimen — a plate beside the lead entry, so the page
          opens like an illustrated book, not a card index. */}
      {!query && active.length === 0 && featured && (
        <div data-family={featured.family} style={{
          display: 'grid', gridTemplateColumns: '300px 1fr', gap: 28,
          alignItems: 'center', marginBottom: 34, paddingBottom: 30,
          borderBottom: '1px solid var(--border-hairline)',
        }}>
          <IllustrationPlate figure={'Fig. ' + featured.number} caption={featured.plateCaption || featured.silhouette} tone="moss" ratio={0.72} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--moss-ink)' }}>Specimen of the week</span>
            </div>
            <h2 onClick={() => onOpen(featured.id)} style={{ fontSize: 32, margin: '0 0 10px', cursor: 'pointer', lineHeight: 1.1 }}>{featured.title}</h2>
            <p style={{ fontFamily: 'var(--font-subhead)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-soft)', margin: '0 0 16px', lineHeight: 1.4 }}>{featured.silhouette}</p>
            <div onClick={() => onOpen(featured.id)} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-label)', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--amber-ink)' }}>
              Read the entry <Icon name="arrow-right" size={15} />
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {entries.map((e) => (
          <div key={e.id} data-family={e.family} onClick={() => onOpen(e.id)} style={{ cursor: 'pointer' }}>
            <EntryCard
              number={e.number}
              taxon={e.taxon}
              title={e.title}
              silhouette={e.silhouette}
              tags={e.tags}
              media={e.media}
              href="#"
            />
          </div>
        ))}
      </div>
      {entries.length === 0 && (
        <p style={{ color: 'var(--ink-muted)', fontStyle: 'italic', marginTop: 30 }}>No specimens match that search.</p>
      )}
    </div>
  );
}

window.BrowseView = BrowseView;
