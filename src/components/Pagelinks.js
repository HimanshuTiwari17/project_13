import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";
const Pagelinks = ({ type }) => {
  return (
    <ul className={`${type}-links`} id={`${type}-links`}>
      {pageLinks.map((link) => {
        return (
          <PageLink
            key={link.id}
            text={link.text}
            link={link.href}
            type={`${type}`}
          />
        );
      })}
    </ul>
  );
};

export default Pagelinks;
