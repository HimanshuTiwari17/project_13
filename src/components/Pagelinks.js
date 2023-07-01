import React from "react";

const Pagelinks = ({ type }) => {
  return (
    <ul className={`${type}-links`} id={`${type}-links`}>
      <li>
        <a href="#home" className={`${type}-link`}>
          home
        </a>
      </li>

      <li>
        <a href="#about" className={`${type}-link`}>
          about
        </a>
      </li>

      <li>
        <a href="#services" className={`${type}-link`}>
          {" "}
          services{" "}
        </a>
      </li>

      <li>
        <a href="#tours" className={`${type}-link`}>
          {" "}
          tours
        </a>
      </li>
    </ul>
  );
};

export default Pagelinks;
