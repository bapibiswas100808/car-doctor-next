import React from "react";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="carousel w-full h-screen">
        {banners?.map((banner, idx) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                idx + 1
              }.jpg)`,
            }}
            key={idx}
            id={`slide${idx + 1}`}
            className="carousel-item relative w-full bg-cover rounded-lg"
          >
            <div className="text-white font-semibold text-lg mx-auto text-center mt-[100px] md:mt-[150px] lg:mt-[200px] space-y-5">
              <h2 className="text-2xl lg:text-5xl">{banner.title}</h2>
              <p>{banner.description}</p>
              <div className="flex gap-5 justify-center">
                <button className="btn btn-primary text-white">
                  Discover More
                </button>
                <button className="btn text-white btn-outline ">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
