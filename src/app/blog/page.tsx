import Navbar from "@/components/navbar";
import Link from "next/link";
import { Footer } from "@/components/footer";
import {
  DifficultyBadge,
  Difficulty,
  Program,
  ProgramBadge,
} from "@/components/badge";

interface BlogMetadata {
  link: string;
  title: string;
  description: string;
  tags: JSX.Element[]; // Use this type if tags are React elements
}

interface Metadata {
  [key: string]: BlogMetadata;
}

const metadata: Metadata = {
  hello_world: {
    link: "/blog/hello_world",
    title: "Hello World",
    description: "Introduction :)",
    tags: [],
  },
  // Uncomment if you want to include more items
  // what_is_reinforcement_learning: {
  //   link: "/blog/what_is_reinforcement_learning",
  //   title: "What Is Reinforcement Learning",
  //   description: "Explores the RL.",
  //   tags: [
  //     <DifficultyBadge key={"wim_tag_b"} difficulty={Difficulty.beginner} />,
  //   ],
  // },
};

export default function Blogs() {
  return (
    <main className="dark:bg-black bg-white">
      <div className="flex justify-center items-center min-h-screen">
        <Navbar visibleDelay={100} />
        <div className="w-full max-w-3xl text-left dark:text-white mt-10">
          <div className="flex flex-col space-y-4 md:p-0 px-5">
            {[
              { slug: "hello_world" },
              // Add more slugs here as needed
            ].map((item) => {
              const _item: BlogMetadata | undefined = metadata[item.slug];
              if (_item === undefined) {
                return null;
              }
              return (
                <Link key={item.slug} className="text-xl" href={_item.link}>
                  <div className="p-5 border-[2px] dark:border-white border-gray-300 hover:shadow-lg flex flex-col rounded-md duration-300">
                    {_item.title}
                    <div className="py-1 flex flex-row space-x-1">{_item.tags}</div>
                    <span className="text-sm">{_item.description}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
