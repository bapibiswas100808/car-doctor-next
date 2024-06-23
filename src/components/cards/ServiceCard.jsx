import Image from "next/image";
import Link from "next/link";
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
          <Link href={`/services/${service._id}`}>
            <button className="btn btn-primary text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
