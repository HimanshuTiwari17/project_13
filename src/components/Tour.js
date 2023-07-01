import React from "react";
const Tour = (props) => {
  return (
    <article class="tour-card">
      <div class="tour-img-container">
        <img src={props.image} class="tour-img" alt="" />
        <p class="tour-date">october 1th, 2020</p>
      </div>
      <div class="tour-info">
        <h4>{props.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div class="tour-footer">
          <p>
            <span>
              <i class="fas fa-map"></i>
            </span>{" "}
            {props.location}
          </p>
          <p>{props.duration}</p>
          <p>from ${props.cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
