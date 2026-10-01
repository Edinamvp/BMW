import { useState } from "react";
import "../styles/newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="newsletter">
      <h1>Stay Updated With BMW</h1>
      <p>Receive the latest BMW news and releases.</p>

      {subscribed ? (
        <p style={{ color: "#0066B1", fontWeight: "bold", fontSize: "18px", marginTop: "20px" }}>
          ✓ Thank you for subscribing! We sent a confirmation to {email}.
        </p>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      )}
    </section>
  );
}

export default Newsletter;