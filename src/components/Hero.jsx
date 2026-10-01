import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>
          Experience BMW
        </h1>

        <p>
          Discover luxury, performance and innovation engineered for the ultimate driving experience.
        </p>

        <div className="hero-buttons">

          <Link to="/signin">
            <button className="primary-btn">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="secondary-btn">
              Sign Up
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;