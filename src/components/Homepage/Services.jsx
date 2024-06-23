import React from "react";
import { services } from "../../lib/services";
import ServiceCard from "../cards/ServiceCard";
import { getServices } from "@/Services/getServices";

const Services = async () => {
  const services = await getServices();
  console.log(services);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl  mt-20 mb-5">Services</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {services?.length > 0 ? (
          services?.map((service, idx) => (
            <ServiceCard service={service} key={idx} />
          ))
        ) : (
          <h2>No data Found</h2>
        )}
      </div>
    </div>
  );
};

export default Services;
