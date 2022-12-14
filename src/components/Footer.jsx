import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Footer.scss";
// the footer component
const Footer = () => {
    return (
        <footer className="footer">
          {/*the logo is a link to the home page */}
          <img src={logo} alt="logo kasa" />
          <p>© 2022 Kasa. All rights reserved</p>
        </footer>
    );
    };

export default Footer;

