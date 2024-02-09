import React from "react";
import "./Contact.scss";
import images from "./../../constants/images";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="img-box">
          <img src={images.contact} alt="mailing women" />
        </div>
        <form>
          <input type="text" id="firstName" placeholder="First Name" required />
          <input type="text" id="lastName" placeholder="Lasst Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="text" id="mobile" placeholder="Mobile" required />
          <h4>Type Your Message Here</h4>
          <textarea></textarea>
          <input type="submit" value="Send" id="button" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
