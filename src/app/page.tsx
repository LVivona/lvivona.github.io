"use client";
import { useState, useEffect, useContext } from "react";

// NEXTJS
import Image from "next/image";

// Components
import HeroSection from "@/components/hero";
import Navbar from "@/components/ui/navbar";

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

export default function Home() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsSectionVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        <div className="relative mx-auto max-w-4xl sm:px-10 pb-10 antialiased p-2 sm:p-0">
          <section id="about" className="max-h-screen max-w-screen mt-[102px] ">
            <div className="flex gap-y-10 h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md ">
              {isSectionVisible && (
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

        <section
          id="blog"
          className="max-h-screen w-full overflow-hidden no-scrollbar"
        >
          <div className="pl-10 py-12 z-10">
            {/* <BlogCarousel blogs={blogs} /> */}
            
          </div>
        </section>
      </main>
    </section>
  );
}
