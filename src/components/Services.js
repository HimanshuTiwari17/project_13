import React from "react";
import Title from "./Title";
import Service from "./Service.js";
import { services } from "../data";
const Services = () => {
  return (
    <section class="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((link) => {
          return <Service key={link.id} title={link.title} icon={link.icon} />;
        })}
      </div>
    </section>
  );
};

export default Services;
