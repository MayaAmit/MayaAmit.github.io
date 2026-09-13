import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="entries">
        {experience.map((job) => (
          <article key={job.org} className="entry">
            <header className="entry-header">
              <div>
                <h3 className="entry-org">{job.org}</h3>
                <p className="entry-role">{job.role}</p>
              </div>
              <div className="entry-meta">
                <p>{job.dates}</p>
                <p>{job.location}</p>
              </div>
            </header>
            <ul className="entry-points">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
