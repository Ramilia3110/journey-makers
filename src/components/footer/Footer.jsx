import React from "react";
import "./Footer.scss";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <h5>Find us:</h5>
        <BsWhatsapp className="social-link" />
        <FaTiktok className="social-link" />
        <BsInstagram className="social-link" />
      </div>
      <p>Bishkek 2024</p>
    </div>
  );
};

export default Footer;
