import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";
const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_if1i5xw",
        "template_nket8n8",
        form.current,
        "335ejCTAEklXOQOUw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer className="footer">
      <br />
      <div className="credit">
        By <span>Sainath Kadam & his Team</span> || some rights reserved
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <input type="submit" value="Send" />
        </form>
      </div>
    </footer>
  );
};
export default Footer;
