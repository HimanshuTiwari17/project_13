import React from "react";

const Service = (props) => {
  return (
    <article class="service">
      <span class="service-icon">
        <i class={props.icon}></i>
      </span>
      <div class="service-info">
        <h4 class="service-title">{props.title}</h4>
        <p class="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </div>
    </article>
  );
};

export default Service;
