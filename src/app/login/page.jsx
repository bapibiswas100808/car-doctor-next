"use client";
import React, { Suspense, useEffect } from "react";
import loginImage from "../../../public/assets/images/login/login.svg";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignIn from "@/components/SocialSignIn/SocialSignIn";

const LoginComponent = () => {
  const Router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  useEffect(() => {
    if (!searchParams) {
      return;
    }
  }, [searchParams]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    console.log(resp);
    if (resp.status === 200) {
      Router.push("/");
    }
  };

  return (
    <div className="max-w-[1170px] mx-auto my-10 px-3 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-10">
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
              Login
            </button>
          </form>
          <Suspense fallback={<div>Loading social sign-ins...</div>}>
            <SocialSignIn />
          </Suspense>
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

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginComponent />
    </Suspense>
  );
};

export default LoginPage;
