import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please complete all fields before sending.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>Have questions about BMW Experience? We'd love to hear from you.</p>

      {submitted ? (
        <div
          style={{
            padding: "40px",
            background: "#171717",
            borderRadius: "15px",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          <h2 style={{ color: "#0066B1", marginBottom: "10px" }}>Message Sent!</h2>
          <p>
            Thank you, {formData.name}. We will get back to you at {formData.email}{" "}
            shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
}

export default Contact;