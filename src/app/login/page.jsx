"use client";
import React from "react";
import loginImage from "../../../public/assets/images/login/login.svg";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const loginPage = () => {
  const handleLogin = async () => {};
  return (
    <div className="max-w-[1170px] mx-auto my-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <Image src={loginImage} alt="" height={500} width={500} />
        </div>
        <div className="flex-1 border-2 px-10 py-20 rounded-lg">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form onSubmit={handleLogin} action="">
            <div className="mb-3">
              <label className="mb-3" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 w-full py-2 px-3 rounded-lg"
                type="email"
                name="email"
                placeholder="Your email"
                id=""
              />
            </div>
            <div className="mb-3">
              <label className="mb-3" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 w-full py-2 px-3 rounded-lg"
                type="password"
                name="password"
                placeholder="password"
                id=""
              />
            </div>
            <button type="submit" className="btn btn-primary text-white mt-4">
              Login
            </button>
          </form>
          <div className="text-center mt-5">
            <h2 className="mb-3">Or Sign In With</h2>
            <div className="text-xl flex gap-3 justify-center">
              <FaFacebookF className="cursor-pointer border " />
              <FaLinkedin className="cursor-pointer border " />
              <FaGoogle className="cursor-pointer border " />
              <FaGithub className="cursor-pointer border " />
            </div>
          </div>
          <div className="mt-5">
            <h2>Not Have an account?</h2>
            <p>
              Please
              <Link className="underline text-blue-500 ml-2" href={"/signup"}>
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
