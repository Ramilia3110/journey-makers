import React, { useState, useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [scroll, setScroll] = useState(false);
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className={scroll ? "nav sticky" : "nav"}>
          <a href="#" className="nav__logo">
            Journey Makers
          </a>
          <ul className={active}>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="#destinations" className="nav__link">
                Destinations
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contacts
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Book now
              </a>
            </li>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
