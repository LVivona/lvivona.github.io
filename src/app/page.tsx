"use client";

// NEXTJS
import Image from "next/image";

// Components
import HeroSection from "@/components/hero/home";
import Navbar from "@/components/navbar";

import Me from "@/../public/github-profile.png";
import Link from "next/link";
import { Github } from "@/components/icons/github";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <section className="  dark:bg-black bg-white ">
      {/* Floating Navbar */}
      <Navbar visibleDelay={1000}/>

      <main className="  flex min-h-screen flex-col items-center justify-between py-2">
        <div className="relative flex items-center justify-center h-screen">
          <section className="w-full h-full flex ">
            <HeroSection />
          </section>
        </div>

        <div
          id="about"
          className="relative mx-auto max-w-4xl h-screen sm:px-10 antialiased p-1 sm:p-0"
        >
          <section className="max-h-screen max-w-screen ">
            <div className="flex gap-y-10 h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md ">
              {
                <>
                  <div className="relative z-20 max-w-3xl text-center text-md text-black dark:text-white animation translateUp">
                    <h1 className="text-center mb-4  animate-translateUp">
                      About me{" "}
                    </h1>
                    <Image
                      src={Me}
                      alt="Luca Vivona"
                      width={128}
                      height={128}
                      loading="lazy"
                      className="rounded-full mx-auto border-[2px] border-black/60 animate-translateUp duration-200"
                    />
                    <div className="animate-translateUp text-center pt-5">
                      Hello wanderer, my name is Luca Vivona, a Computer
                      Scientist who loves tinkering around with Deep Learning
                      models, and low-level programming. 🧠🤖
                    </div>
                  </div>
                </>
              }
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </section>
  );
}
