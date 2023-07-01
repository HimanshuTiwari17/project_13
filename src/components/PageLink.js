import React from "react";

const PageLink = (prop) => {
  return (
    <li>
      <a href={`${prop.link}`} className={`${prop.type}-link`}>
        {prop.text}
      </a>
    </li>
  );
};

export default PageLink;
