import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css"; // moved into a dedicated contact.css for clarity

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bwrnzkv",
        "template_rlnqq6b",
        form.current,
        "WiFuRL1PfE1tFrHwo"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Something went wrong. " + error.text);
        }
      );
  };

  return (
    <div className="contact-section">
      <h2 className="contact-heading">Contact Form</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
}
