import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/auth.css";

function SignUp() {

  return (

    <>

      {/* <Navbar /> */}

      <section className="auth">

        <div className="auth-container">

          <h1>Create Account</h1>

          <p>
            Join BMW Experience today.
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>
              Create Account
            </button>

          </form>

        </div>

      </section>

      {/* <Footer /> */}

    </>

  );

}

export default SignUp;


