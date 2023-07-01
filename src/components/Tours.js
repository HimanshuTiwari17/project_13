import React from "react";

import Title from "./Title";
import Tour from "./Tour";
import { tours } from "../data.js";
// import tour5 from "./images/tour-5.jpeg";
// import tour6 from "./images/tour-6.jpeg";
const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="Featured" subTitle="tours" />
      <div class="section-center featured-center">
        {tours.map((link) => {
          return (
            <Tour
              key={link.id}
              title={link.title}
              image={link.image}
              date={link.date}
              location={link.location}
              cost={link.cost}
              duration={link.duration}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
