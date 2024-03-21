import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Footer = () => {
  const { mode } = useAuthContext();

  return (
    <footer
      className={`footer p-10  ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <aside>
        <strong>LAPTOPMART</strong>
        <p>
          Shashtri Nagar Jaipur, Rajasthan, IN
          <br />
          +91-8696916676
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <p className="link link-hover">Seling Laptop's</p>
        <p className="link link-hover">Repaire</p>
        <p className="link link-hover">Extend SSD </p>
        <p className="link link-hover">Extend RAM</p>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
