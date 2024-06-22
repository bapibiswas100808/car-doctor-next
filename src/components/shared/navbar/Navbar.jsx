"use client";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/assets/icons/logo.svg";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const session = useSession();
  console.log(session);
  const navLinks = (
    <>
      <li className="font-semibold text-lg">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link href={"/service"}>Service</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-[1170px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="text-xl">
            <Link href={"/"}>
              <Image src={logo} alt="" height={50} width={50} />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-5">
          <FaSearch />

          <FaShoppingCart />
          <a className="btn btn-outline btn-primary text-white">Appiontment</a>
          {!session.data ? (
            <Link href={"/login"}>
              <button className="btn btn-primary text-white">Login</button>
            </Link>
          ) : (
            <button
              onClick={() => signOut()}
              className="btn btn-primary text-white"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
