import React from "react";
import { services } from "../../lib/services";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl  mt-20 mb-5">Services</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {services?.map((service, idx) => (
          <ServiceCard service={service} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Services;
