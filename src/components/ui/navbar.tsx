"use client";
import React, { useState } from "react";
import { Github } from "../icons/github";
import { Email } from "../icons/email";

const email = "luca.v.vivona@gmail.com";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav
      className={` fixed left-0 right-0 top-2 z-50 flex items-center justify-center p-4 `}
    >
      <div className="fixed top-5 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <div className="flex space-x-4">
            <a
              href="#home"
              className="scroll-smooth text-black hover:text-gray-300 dark:text-white"
            >
              Home
            </a>
            <a href="#comming" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#comming" className="text-white hover:text-gray-300">
              Blog
            </a>
            <a href="#comming" className="text-white hover:text-gray-300">
              Projects
            </a>
            <a
              onClick={() => {
                setVisible((prev) => !prev);
              }}
              className=" text-white hover:text-gray-300"
            >
              <Email />
            </a>
            <a
              href={"https://github.com/LVivona"}
              className=" text-white hover:text-gray-300 sm:hidden"
            >
              <Github />
            </a>
          </div>{" "}
        </span>
      </div>

      {/* hidden email */}
      <div
        id="details"
        className={`z-10 mt-12 font-semibold text-white ${!visible && "opacity-0"} duration-150`}
      >
        {visible && email}
      </div>
    </nav>
  );
};
