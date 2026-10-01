import "../styles/about.css";

function About() {
  return (
    <section className="about">
      <h1>About BMW</h1>

      <p>
        BMW (Bayerische Motoren Werke) has been shaping the future of driving
        since 1916. Known for luxury, innovation, and performance, BMW continues
        to create vehicles that combine engineering excellence with premium design.
      </p>

      <div className="about-cards">
        <div>
          <h2>Mission</h2>
          <p>
            Deliver the ultimate driving experience through innovation and precision
            engineering.
          </p>
        </div>

        <div>
          <h2>Vision</h2>
          <p>To lead the future of sustainable and luxury mobility.</p>
        </div>

        <div>
          <h2>Innovation</h2>
          <p>
            From the legendary M Series to the electric i Series, BMW continues
            pushing technology forward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;