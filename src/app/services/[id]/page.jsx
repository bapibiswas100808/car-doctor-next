import { getServicesDetails } from "@/Services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Service Details",
  description: "Service Details page",
};

const Page = async ({ params }) => {
  const details = await getServicesDetails(params.id);
  console.log(details);
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
            <Image
              alt=""
              height={800}
              width={800}
              src={details?.img}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{details?.title}</h1>
            <p className="py-6">{details?.description}</p>
            <p className="py-3 text-red-500">
              <span className="pr-2 text-lg font-semibold">Price:</span>
              {details?.price}
            </p>
            <Link href={`/booking/${details._id}`}>
              <button className="btn btn-primary text-white">
                Get Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
