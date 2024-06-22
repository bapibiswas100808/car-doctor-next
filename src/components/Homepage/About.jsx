import React from "react";
import about1 from "../../../public/assets/images/about_us/person.jpg";
import about2 from "../../../public/assets/images/about_us/parts.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 relative">
        <Image className="" src={about1} alt="" height={500} width={500} />
        <Image
          className="lg:absolute md:absolute bottom-28 right-10 border-white border-2"
          src={about2}
          alt=""
          height={300}
          width={300}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-red-500 text-3xl">
          We are qualified & of experience in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
        <br />
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
