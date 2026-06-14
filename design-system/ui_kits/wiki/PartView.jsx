/* PartView — a family's PART page, with its PRIMER integrated as the
   opener (the true unnumbered-primer-then-articles divider is hard in
   Quarto/Typst, so the primer becomes the part page's subtitle + lead).
   Family-coloured throughout via data-family; then the numbered article
   index. Composes EntryCard, Icon, Silhouette. */
function PartView({ family, data, onOpen }) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const { EntryCard, Icon } = DS;
  const section = data.sections.find((s) => s.id === family) || data.sections[0];
  const primer = (data.primers && data.primers[family]) || {};
  const articles = data.entries.filter((e) => e.family === family);

  return (
    <div data-family={family} style={{ maxWidth: 940, margin: '0 auto', padding: '40px 44px 88px' }}>
      {/* Part divider / primer opener */}
      <header style={{ borderTop: '2px solid var(--amber)', paddingTop: 18, marginBottom: 34 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
          <Icon name={family} size={20} style={{ color: 'var(--amber-ink)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--amber-ink)', letterSpacing: '0.06em' }}>PART {primer.part}</span>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{section.label}</span>
        </div>
        <h1 style={{ fontSize: 50, margin: '0 0 6px', letterSpacing: '-0.01em', lineHeight: 1.02 }}>{section.label}</h1>
        {/* The primer, integrated as the part's subtitle + lead */}
        {primer.title && (
          <div style={{ fontFamily: 'var(--font-subhead)', fontStyle: 'italic', fontSize: 22, color: 'var(--amber-ink)', margin: '0 0 16px', lineHeight: 1.25 }}>
            <span style={{ fontFamily: 'var(--font-label)', fontStyle: 'normal', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', marginRight: 10, verticalAlign: 'middle' }}>Primer</span>
            {primer.title}
          </div>
        )}
        <p style={{ fontFamily: 'var(--font-reading)', fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '60ch', margin: 0 }}>
          {primer.lead}
        </p>
      </header>

      {/* Article index for this part */}
      <div style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 }}>
        Articles in this part <span style={{ color: 'var(--ink-faint)' }}>· {articles.length}</span>
      </div>
      {articles.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {articles.map((e) => (
            <div key={e.id} onClick={() => onOpen(e.id)} style={{ cursor: 'pointer' }}>
              <EntryCard number={e.number} taxon={e.taxon} title={e.title} silhouette={e.silhouette} tags={e.tags} media={e.media} href="#" />
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--ink-muted)' }}>
          The articles for this part are still being written.
        </p>
      )}
    </div>
  );
}

window.PartView = PartView;
