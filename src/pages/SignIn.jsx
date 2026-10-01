import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/auth.css";

function SignIn() {

  return (

    <>

      {/* <Navbar /> */}

      <section className="auth">

        <div className="auth-container">

          <h1>Welcome Back</h1>

          <p>
            Sign in to your BMW Experience account.
          </p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>
              Sign In
            </button>

          </form>

        </div>

      </section>

      {/* <Footer /> */}

    </>

  );

}

export default SignIn;