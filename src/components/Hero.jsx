export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-name">Maya Amit</h1>
        <p className="hero-tagline">
          M.S. Data Science candidate at NYU — optics, astrophysics, and scientific computing.
        </p>
        <div className="hero-bio">
          <p>
            I'm drawn to problems at the intersection of instrumentation, imaging, and large-scale
            scientific pipelines. I'm currently pursuing an M.S. in Data Science at NYU after
            completing a B.S. in Applied Physics at Northeastern.
          </p>
          <p>
            My work has spanned NASA JPL, where I built simulation pipelines for the Habitable
            Worlds Observatory coronagraph; SuperBIT, a balloon-borne telescope measuring dark
            matter through weak gravitational lensing; and Draper, where I characterized photonic
            integrated circuits. Outside of research, I've been a ballet dancer for eighteen years.
          </p>
        </div>
      </div>
      <div className="hero-photo">
        <img src="/headshot.png" alt="Portrait of Maya Amit" />
      </div>
    </section>
  )
}
