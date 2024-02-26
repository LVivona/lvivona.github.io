"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { SparklesCore } from "../components/ui/sparkels";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  // adjust later
  // const [theme, setTheme] = useState(true);

  return (
    <section className="">
      {/* Floating Navbar */}
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
                href="#comming"
                className=" text-white hover:text-gray-300 sm:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>{" "}
          </span>
        </div>
      </nav>
      {/**/}
      {/* Floating Theme Toggle Button */}
      {/*
      <button
        onClick={() => {
          setTheme((prev: boolean) => !prev);
        }}
        className="fixed right-5 top-5 z-50 rounded-full bg-gray-300 p-2 text-lg shadow-lg transition-colors hover:bg-zinc-700 focus:outline-none dark:bg-zinc-900"
      >
        <span>{theme ? "🌞" : "🌜"}</span>
    </button >
    */}

      {/* GitHub */}
      <a
        href={"https://github.com/LVivona"}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 top-5 z-10 inline-flex hidden h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:block "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github-filled"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>

      <main className="flex min-h-screen flex-col items-center justify-between py-2">
        <TracingBeam className=" h-auto">
          <div className="relative mx-auto max-w-2xl pt-4 antialiased">
            <div id="home" className="mb-10">
              <div className=" flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md ">
                <h1 className="relative z-20 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  <TextGenerateEffect
                    className="text-3xl md:text-7xl lg:text-6xl"
                    words={"Hello World 👋"}
                  />
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
                    particleDensity={500}
                    className=" h-full w-full"
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
