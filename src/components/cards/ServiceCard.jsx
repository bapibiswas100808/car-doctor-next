import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl min-h-[400px]">
        <figure>
          <Image src={service?.img} alt="image" height={300} width={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.title}</h2>
          <p>
            <span className="mr-2 text-lg font-semibold text-red-400">
              Price:
            </span>
            ${service?.price}
          </p>
          <button className="btn btn-primary text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
