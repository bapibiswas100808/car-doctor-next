"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import loginImage from "../../../public/assets/images/login/login.svg";
import Link from "next/link";
import SocialSignIn from "@/components/SocialSignIn/SocialSignIn";

const SignUp = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
    if (resp.status === 200) {
      e.target.reset();
    }
  };

  return (
    <div className="px-3 lg:px-0">
      <div className="max-w-[1170px] mx-auto my-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <Image src={loginImage} alt="" height={500} width={500} />
          </div>
          <div className="flex-1 border-2 px-10 py-20 rounded-lg">
            <h2 className="text-3xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleRegister} action="">
              <div className="mb-3">
                <label className="mb-3" htmlFor="name">
                  Name{" "}
                </label>
                <input
                  className="border-2 w-full py-2 px-3 rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  id="name"
                />
              </div>
              <div className="mb-3">
                <label className="mb-3" htmlFor="email">
                  Email{" "}
                </label>
                <input
                  className="border-2 w-full py-2 px-3 rounded-lg"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  id="email"
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
                  id="password"
                />
              </div>
              <button type="submit" className="btn btn-primary text-white mt-4">
                Sign Up
              </button>
            </form>
            <Suspense fallback={<div>Loading social sign-ins...</div>}>
              <SocialSignIn />
            </Suspense>
            <div className="mt-5">
              <h2>Already Have an account?</h2>
              <p>
                Please
                <Link className="underline text-blue-500 ml-2" href={"/login"}>
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUpPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUp />
    </Suspense>
  );
};

export default SignUpPage;
