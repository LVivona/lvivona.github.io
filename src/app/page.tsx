"use client";
import { useState, useEffect, useContext } from "react";

// NEXTJS
import Image from "next/image";

// Components
import HeroSection from "@/components/hero";
import Navbar from "@/components/ui/navbar";
import { useMobile } from "@/context/mobilContext";

const blogs = [
  {
    type: "Technical",
    src: "/api/images?folder=blogs&image=clouds.webp&height=700&width=500&crop=true",
    alt: "Technical Blog 1",
    height: 300,
    width: 500,
    description: "An in-depth look at React hooks",
    slug: "react-hooks-deep-dive",
    title: "Empower your entire workforce with enterprise-grade AI",
  },
  {
    type: "Opinion",
    src: "/api/images?folder=blogs&image=rvb.webp&height=700&width=500&crop=true",
    alt: "Opinion Blog 1",
    height: 300,
    width: 500,
    description: "Why TypeScript is the future of web development",
    slug: "typescript-future-of-web-dev",
    title: "Empower your entire workforce with enterprise-grade AI",
  },
  {
    type: "Opinion",
    src: "/api/images?folder=blogs&image=landscape.webp&height=700&width=500&crop=true",
    alt: "Opinion Blog 1",
    height: 300,
    width: 500,
    description: "Why TypeScript is the future of web development",
    slug: "typescript-future-of-web-dev",
    title: "Empower your entire workforce with enterprise-grade AI",
  },
  {
    type: "Opinion",
    src: "/api/images?folder=blogs&image=landscape.webp&height=700&width=500&crop=true",
    alt: "Opinion Blog 1",
    height: 300,
    width: 500,
    description: "Why TypeScript is the future of web development",
    slug: "typescript-future-of-web-dev",
    title: "Empower your entire workforce with enterprise-grade AI",
  },
  {
    type: "Opinion",
    src: "/api/images?folder=blogs&image=landscape.webp&height=700&width=500&crop=true",
    alt: "Opinion Blog 1",
    height: 300,
    width: 500,
    description: "Why TypeScript is the future of web development",
    slug: "typescript-future-of-web-dev",
    title: "Empower your entire workforce with enterprise-grade AI",
  },
];

export function useElementVisibility(elementId: string) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const element = document.getElementById(elementId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId]);

  return isVisible;
}

export default function Home() {
  const isAboutVisible = useElementVisibility('about');
  
  return (
    <section className="  dark:bg-black bg-white ">
      {/* Floating Navbar */}
      <Navbar />

      <main className="  flex min-h-screen flex-col items-center justify-between py-2">
        <div className="relative flex items-center justify-center h-screen">
          <section className="w-full h-full flex ">
            <HeroSection/>
          </section>
        </div>

        <div className="relative mx-auto max-w-4xl h-screen sm:px-10 antialiased p-1 sm:p-0">
          <section id="about" className="max-h-screen max-w-screen ">
            <div className="flex gap-y-10 h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md ">
              {isAboutVisible && (
                <>
                  <div className="relative z-20 max-w-3xl text-center text-md text-black dark:text-white animation translateUp">
                    <h1 className="text-center mb-4  animate-translateUp">
                      About me{" "}
                    </h1>
                    <Image
                      src="https://avatars.githubusercontent.com/u/66436951?v=4"
                      alt="Luca Vivona"
                      width={128}
                      height={128}
                      loading="eager"
                      className="rounded-full mx-auto border-[2px] border-black/60 animate-translateUp duration-200"
                    />
                    <div
                      className="animate-translateUp text-center pt-5">
                        Hello wanderer, my name is Luca Vivona, a Computer Scientist who loves tinkering around with Deep Learning models, and low-level programming. 🧠🤖
                      </div>

                  </div>

                  {/* <div className=" flex flex-row gap-x-2 border-1 animate-translateUp ">
                    <BlogCard
                      type="For Everyone"
                      alt="blog-1"
                      src="/api/images?folder=blogs&image=clouds.webp&height=700&width=500&crop=true"
                      width={250}
                      height={250}
                      description="building a compiler"
                      slug="compilers"
                      title="Empower your entire workforce with enterprise-grade AI"
                    />
                    <div className=" hidden sm:block">
                      <BlogCard
                        type="Technical"
                        alt="blog-1"
                        src="/api/images?folder=blogs&image=landscape.webp&height=700&width=500&crop=true"
                        width={250}
                        height={250}
                        description="building a compiler"
                        slug="compilers"
                        title="Empower your entire workforce with enterprise-grade AI"
                      />
                    </div>
                    <div className=" hidden md:block">
                      <BlogCard
                        type="Project"
                        alt="blog-1"
                        src="/api/images?folder=blogs&image=rvb.webp&height=700&width=500&crop=true"
                        width={250}
                        height={250}
                        description="building a compiler"
                        slug="compilers"
                        title="Empower your entire workforce with enterprise-grade AI"
                      />
                    </div>
                  </div> */}
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
