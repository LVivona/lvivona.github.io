'use server';
import { BeeMovieComponent } from "@/components/hero/bee_movie";
import Navbar from "@/components/ui/navbar";

export default async function Projects() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black flex flex-col justify-center items-center w-full h-screen p-6 ">
      <Navbar />

      <div className="flex flex-col sm:flex-row items-center justify-center max-h-screen max-w-full md:w-[1000px] p-4 rounded-lg">
        <BeeMovieComponent />
      </div>
    </div>
  );
}
