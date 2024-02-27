"use client";
import React from "react";

import { TextGenerateEffect } from "@/components/ui/text-generate";
import { SparklesCore } from "../components/ui/sparkels";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Navbar } from "@/components/ui/navbar";

// Icons
import { Github } from "@/components/icons/github";

export default function Home() {
  // adjust later
  // const [theme, setTheme] = useState(true);

  return (
    <section>
      {/* Floating Navbar */}
      <Navbar />

      {/* Floating Theme Toggle Button */}
      {/* <button
	        onClick={() => {
	          setTheme((prev: boolean) => !prev);
	        }}
	        className="fixed right-5 top-5 z-50 rounded-full bg-gray-300 p-2 text-lg shadow-lg transition-colors hover:bg-zinc-700 focus:outline-none dark:bg-zinc-900"
	      >
	        <span>{theme ? "🌞" : "🌜"}</span>
	    </button > */}

      {/* GitHub */}
      <a
        href={"https://github.com/LVivona"}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 top-5 z-10 hidden h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:block sm:inline-flex "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <Github />
        </span>
      </a>

      <main className="flex min-h-screen flex-col items-center justify-between py-2">
        <TracingBeam className=" h-auto">
          <div className="relative mx-auto max-w-2xl pt-14 antialiased">
            <div id="home" className="mb-10">
              <div className=" flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md ">
                <h1 className="relative z-20 text-center text-5xl font-bold text-white duration-150 md:text-6xl lg:text-7xl">
                  <TextGenerateEffect className="" words={"Hello World 👋"} />
                </h1>

                <div className="relative h-40 w-[40rem]">
                  {/* Gradients */}
                  <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                  <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                  <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-sm" />
                  <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

                  {/* Core component */}
                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={250}
                    className="h-full w-full"
                    particleColor={"#FFFFFF"}
                  />

                  {/* Radial Gradient to prevent sharp edges */}
                  <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
              </div>
            </div>
            <div id="comming" className="mb-40">
              <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
                <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  More Coming Soon...
                </h1>
              </div>
            </div>
          </div>
        </TracingBeam>
      </main>
    </section>
  );
}
