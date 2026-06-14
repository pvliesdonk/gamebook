/* ArticleView — a single plate read in full. De-doc'd: the header carries
   a taxon icon + number, the right column opens with a naturalist
   illustration plate above the exemplar, the lead drops a cap, and the
   three callout voices are printed asides (Specimen plate, Field Note,
   Hazard band) — not tinted boxes. Composes Silhouette, Callout,
   ProvenanceMark, StatBlock, Backlinks, MediaBadge, Tag, Icon,
   IllustrationPlate. */
function ArticleView({ entry, data, onOpen }) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const { Silhouette, Callout, ProvenanceMark, StatBlock, Backlinks, MediaBadge, Tag, Icon, IllustrationPlate } = DS;

  const body = entry.body || [];
  const family = entry.family || 'puzzles';
  const tone = ({ if: 'slate', live: 'clay', tabletop: 'moss', hunt: 'ochre' })[entry.media] || 'moss';
  let pcount = 0; // count body paragraphs to drop-cap the first

  return (
    <div data-family={family} style={{ maxWidth: 940, margin: '0 auto', padding: '36px 44px 88px' }}>
      {/* Plate header */}
      <header style={{ borderTop: '2px solid var(--amber)', paddingTop: 18, marginBottom: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
          <Icon name={family} size={17} style={{ color: 'var(--amber-ink)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--amber-ink)', letterSpacing: '0.04em' }}>№ {entry.number}</span>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{entry.taxon}</span>
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            {entry.provenance && <ProvenanceMark kind={entry.provenance} />}
            <MediaBadge media={entry.media} />
          </span>
        </div>
        <h1 style={{ fontSize: 48, margin: '0 0 14px', letterSpacing: '-0.01em', lineHeight: 1.05 }}>{entry.title}</h1>
        <Silhouette>{entry.silhouette}</Silhouette>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {(entry.tags || []).map((t) => <Tag key={t} size="sm">{t}</Tag>)}
        </div>
      </header>

      {/* Body + right column (plate + exemplar) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 312px', gap: 48, alignItems: 'start' }}>
        <article style={{ minWidth: 0 }}>
          {body.map((b, i) => {
            if (b.type === 'lead') {
              return (
                <p key={i} style={{ fontSize: 20, lineHeight: 1.58, color: 'var(--ink-soft)', marginBottom: 22 }}>
                  <span style={{ float: 'left', fontFamily: 'var(--font-display)', fontSize: 62, lineHeight: 0.8, fontWeight: 700, color: 'var(--ink)', padding: '5px 11px 0 0' }}>
                    {String(b.text).charAt(0)}
                  </span>
                  {String(b.text).slice(1)}
                </p>
              );
            }
            if (b.type === 'h')
              return (
                <h2 key={i} style={{ fontSize: 27, marginTop: 40, marginBottom: 15, display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: 12, fontWeight: 600, color: 'var(--amber)', letterSpacing: '0.06em' }}>{'\u00A7'}</span>
                  {b.text}
                </h2>
              );
            if (b.type === 'h3')
              return (
                <h3 key={i} style={{ fontFamily: 'var(--font-subhead)', fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginTop: 28, marginBottom: 10 }}>
                  {b.text}
                </h3>
              );
            if (b.type === 'sources')
              return (
                <div key={i} style={{ marginTop: 36, borderTop: '1px solid var(--border-hairline)', paddingTop: 16 }}>
                  <div style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 10 }}>Sources</div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {b.items.map((s, j) => (
                      <li key={j} style={{ fontFamily: 'var(--font-data)', fontSize: 12, lineHeight: 1.5, color: 'var(--ink-muted)' }}>{s}</li>
                    ))}
                  </ul>
                </div>
              );
            if (b.type === 'callout')
              return <Callout key={i} kind={b.kind} title={b.title} plate={b.plate}>{b.text}</Callout>;
            pcount += 1;
            return (
              <p key={i} style={{ fontSize: 17, lineHeight: 1.64, color: 'var(--ink-soft)', marginBottom: 18 }}>
                {b.text}{' '}
                {b.prov && <ProvenanceMark kind={b.prov} />}
              </p>
            );
          })}
        </article>

        <aside style={{ position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <IllustrationPlate
            figure={'Fig. ' + entry.number}
            caption={entry.plateCaption || entry.silhouette}
            tone="amber"
            ratio={0.78}
          />
          {entry.exemplar && (
            <div>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 10 }}>The Exemplar</div>
              <StatBlock title={entry.exemplar.title} subtitle={entry.exemplar.subtitle} rows={entry.exemplar.rows} />
            </div>
          )}
        </aside>
      </div>

      {/* Referenced by */}
      {entry.backlinks && entry.backlinks.length > 0 && (
        <div
          style={{ marginTop: 52 }}
          onClickCapture={(e) => {
            const a = e.target.closest('a');
            if (!a) return;
            e.preventDefault();
            const title = a.textContent.trim();
            const hit = entry.backlinks.find((l) => title.startsWith(l.title));
            if (hit) onOpen(hit.id);
          }}
        >
          <Backlinks links={entry.backlinks.map((l) => ({ ...l, href: '#' }))} />
        </div>
      )}
    </div>
  );
}

window.ArticleView = ArticleView;
