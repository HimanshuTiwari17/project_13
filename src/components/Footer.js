import React from "react";
import Pagelinks from "./Pagelinks";

const Footer = () => {
  return (
    <footer class="section footer">
      <Pagelinks type="footer" />
      <ul class="footer-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            class="footer-icon"
            rel="noreferrer"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            class="footer-icon"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            class="footer-icon"
            rel="noreferrer"
          >
            <i class="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
