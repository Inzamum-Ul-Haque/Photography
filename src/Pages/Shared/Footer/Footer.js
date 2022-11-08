import React from "react";
import logo from "../../../Assets/logos/icons8-slr-large-lens-96.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-stone-100 text-black">
      <div className="text-sky-800 footer-logo">
        <img src={logo} alt="" />
        <h1 className="text-4xl font-bold">Photography</h1>
        <p className="text-lg font-semibold">Live your memories!</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Branding
        </a>
        <a href="/" className="link link-hover">
          Design
        </a>
        <a href="/" className="link link-hover">
          Marketing
        </a>
        <a href="/" className="link link-hover">
          Advertisement
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
        <a href="/" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
