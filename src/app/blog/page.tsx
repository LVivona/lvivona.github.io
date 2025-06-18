import Navbar from "@/components/navbar";
import Link from "next/link";

interface BlogMetadata {
  link: string;
  title: string;
  description: string;
  tags: JSX.Element[];
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
};

const ASCII_BLOG = `
                  $$$$$$$\\  $$\\                     
                  $$  __$$\\ $$ |                    
                  $$ |  $$ |$$ | $$$$$$\\   $$$$$$\\  
                  $$$$$$$\\ |$$ |$$  __$$\\ $$  __$$\\ 
                  $$  __$$\\ $$ |$$ /  $$ |$$ /  $$ |
                  $$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |
                  $$$$$$$  |$$ |\\$$$$$$  |\\$$$$$$$ |
                  \\_______/ \\__| \\______/  \\____$$ |
                                          $$\\   $$ |
                                          \\$$$$$$  |
                                          \\______/ 

////////////////////////////////////////////////////////////////////////////
                         `;

export default function Blogs() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black flex flex-col items-center w-full min-h-screen p-6">
      <Navbar visibleDelay={100} />
      <div className="animate-translateUp flex flex-col items-center justify-center max-h-screen max-w-full md:w-[1000px] p-4 pt-20">
        <div className="w-full flex justify-center">
          <pre className="font-mono sm:text-xs lg:text-sm text-xxxs dark:text-white text-black whitespace-pre overflow-x-auto">
            {ASCII_BLOG}
          </pre>
        </div>
        <div id="blog" className=" max-w-full md:w-[750px] p-4 flex flex-col space-y-4 justify-center font-mono px-10 text-sm md:pt-10">
          {[
            { slug: "hello_world" },
            // Add more slugs here as needed
          ].map((item) => {
            const _item: BlogMetadata | undefined = metadata[item.slug];
            if (_item === undefined) {
              return null;
            }
            return (
              <div key={item.slug} id={item.slug}>
                <Link className="text-purple-400 underline font-bold mr-2" href={_item.link}>
                  {_item.title}
                </Link>
                {_item.description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}