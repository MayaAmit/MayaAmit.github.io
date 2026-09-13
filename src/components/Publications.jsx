import { publications } from '../data.js'

export default function Publications() {
  return (
    <section className="section" id="publications">
      <h2 className="section-title">Publications &amp; Talks</h2>
      <ol className="pub-list">
        {publications.map((p, i) => (
          <li key={i} className="pub-item">
            <p className="pub-citation">{p.citation}</p>
            <p className="pub-meta">
              <span>{p.venue}</span>
              {p.kind && <span> · {p.kind}</span>}
              {p.link && (
                <>
                  {' · '}
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel}
                  </a>
                </>
              )}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
