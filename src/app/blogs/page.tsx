'use client'

import { TextGenerateEffect } from "@/components/ui/text-generate";
import Link from "next/link";
import { useEffect, useState } from "react";

const stop_exe = `⠁⠀⠀⠀⠀⢠⣷⣼⢿⣇⣤⣶⣿⠛⠛⣿⣤⣷⠀⡿⡄⠀⠀⠀⠀⠀⠀⣿⠀⠀⢰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢷⡀⠀⠀⠀⠀⠀⠹⡇⠀⠀⠀⠀⠀⠀⠉⠳⠄⠀⠀
⠀⠀⠀⠀⠀⣾⣻⣿⣾⡟⠃⢰⡇⠀⠀⢿⣿⠿⡆⢻⣇⠀⠀⠀⠀⠀⠀⣿⠀⠀⣽⣳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠒⠒⠻⣦⡀⠀⠀⠀⠀⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⣿⠋⢸⡄⠀⣼⡀⠀⠀⠘⣿⡀⣷⠈⣿⡀⠀⠀⠀⠀⠀⣿⠀⢠⣿⡟⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣄⠀⠀⠀⠈⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⡿⠁⠀⢸⠀⢰⡏⣃⣠⠤⠴⢻⣿⠙⣇⢹⣇⠀⠀⠀⠀⠀⢹⠀⣸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⡀⠀⠀⠀⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡿⠃⠀⣀⣼⡄⢸⠏⠁⠀⠀⠀⠀⢻⡄⢻⡄⣿⡄⠀⠀⠀⠀⢸⡄⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣆⠀⠀⠘⢧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣧⠔⠋⠁⢸⡇⢼⠀⠀⠀⠀⠀⠀⠀⢻⣾⢷⡘⣷⠀⠀⠀⠀⠘⣧⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⡀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢰⡟⠀⠀⠀⠀⠀⣇⣿⠀⠀⠀⠀⠀⠀⠀⠀⢻⣄⢷⡹⣇⠀⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠹⡆⠀⠀⠀⠀⠀⠀
⠀⠠⣿⠀⠀⠀⠀⠀⠀⢻⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣖⢻⣿⡆⠀⠀⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⣄⢻⡄⠀⠀⠀⠀⠀
⠀⣼⣻⡀⠀⠀⠀⠀⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣾⣷⡄⠀⠀⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣷⡀⠀⠀⠀⠀
⢰⡿⢻⡇⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⡄⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⠤⠤⠴⠖⠒⠒⠒⠒⠒⠒⠒⠛⠛⠂⠀⠀⠀⠀⠈⠻⣧⠀⠀⠀⠀
⡿⠠⢰⣷⠀⠀⠀⠀⠀⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡝⣆⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠙⣇⠀⠀⠀
⣷⠀⠀⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣟⢷⡀⠀⢷⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⡆⠀⠀
⠁⣴⣷⢺⡇⠀⠀⠀⠀⠀⠀⠀⣀⣠⡤⠶⢖⣿⠃⠀⠀⠀⠀⠀⠀⠀⠙⢷⣽⢦⡸⡇⠀⠀⠀⠀⠀⠀⠿⠛⠛⠋⠉⠉⢫⡉⠉⣀⣰⠎⢻⣿⣿⣿⣿⠇⣿⡿⠀⠀⠀⢸⣿⡄⠀
⣤⣿⡰⠀⣧⠀⠀⣀⡤⢶⣚⣭⣵⣶⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣿⣿⡄⠀⠀⠀⠀⠀⠀⣴⠒⠀⠀⠀⠀⢿⣿⣿⣿⠀⠂⠎⢩⠉⠰⣆⡟⠓⡄⠀⠀⢸⣿⣷⠀
⣿⠈⠁⠀⣿⣄⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⡀⠀⠀⠀⠀⠀⠘⢆⣀⣀⣀⣀⣼⠿⠿⠿⠿⠿⠿⠿⠿⠟⠛⠛⠋⠁⠀⠀⢸⡇⡸⣇
⣿⠒⠀⣦⣼⡿⣿⣿⣿⡿⠟⠛⡽⢿⣿⣿⠟⡿⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣷⡀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⡴⠖⠀⠀⠀⠰⣿⠂⢸⡇⠫⣿
⣿⠇⠂⠋⢸⣿⠈⣿⠁⠁⣾⣿⣷⣀⠉⣙⣤⡿⠿⠁⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⠀⠙⡁⢀⠀⠀⠀⠀⠀⠀⠀⢸⡃⡇⠈
⣿⠀⡄⠀⠠⣿⡄⠸⡆⢀⣘⡿⠿⠟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠋⠀⠀⠀⠀⠀⠀⠀⢸⡅⠅⠀
⣿⠀⡇⠀⢠⣸⡇⠀⠙⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⣆⠀
⣿⠀⡇⠀⢠⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀
⣿⠀⡇⠀⠀⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⡀⠀⠀⠀⠀⠀⠀⣀⣤⠾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀
⣿⠀⡁⠀⠠⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⣀⣀⡤⠴⠛⠉⠉⠛⠓⠚⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⢲
⣿⠀⠄⠀⠀⣿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⣨
⡿⠀⠂⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢠⣼
⣿⠃⠁⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⡰⣿
⠧⠃⠁⡆⢠⡇⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢱⡇
⢧⣐⡀⠃⢀⡇⣿⢻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣇⣼⡗
⠈⢿⣬⠄⠈⡇⢸⠀⠘⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⠟⢻⣡⡟⠀
⠀⠀⢻⣦⠀⡇⢸⡄⠐⣿⡅⠀⠙⠛⠳⢦⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⠾⣿⠛⠛⠛⢻⣿⠃⠀
⠀⠀⠀⠹⣆⣧⠸⡇⠀⣿⡇⠀⠀⠀⠀⠀⠀⢹⡟⠛⠶⢦⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠴⠞⠋⠁⠀⠀⢿⡀⠀⠀⢸⣿⠃⠀
⠀⠀⠀⠀⠙⣿⠀⣇⢸⣿⣯⠰⠂⠀⠀⠀⠀⣹⡇⠢⢀⠀⣿⠈⠉⠙⠻⠶⢦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡤⠶⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠘⣇⣠⡴⣾⡟⠀⠀
⠀⠀⠀⠀⠀⠘⠆⢿⢸⡇⣧⠆⠀⠀⠀⠀⠀⢹⡇⠀⠀⢀⣿⠁⠀⠀⠀⠀⠈⠙⢿⡟⢿⡶⢤⣄⣠⣤⠤⠶⠒⢾⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠋⠁⢠⡿⢷⢀⢀
⠀⢀⡀⠀⠀⠀⠀⢸⣾⡇⠸⡄⠀⢀⡀⠀⠀⣾⡟⠀⠀⢹⣿⡤⠀⠀⢀⡀⠀⠀⢸⣧⣼⣀⣶⢿⠋⠀⠀⠀⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⡚⠋⠀⠀⢀⡀⣼⠇⢓⣴⢞`;

export default function Error() {
  const [displayTxt, setDisplayTxt] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleText = async () => {
      try {
        const response = await fetch("/bee-movie.txt");
        if (!response.ok) {
          console.error(`Response status: ${response.status}`)
        }
        const text = await response.text();
        const dialogues = extractDialogues(text);
        let txt = getRandomDialogue(dialogues)
        setDisplayTxt(txt);
      } catch (error) {
        console.error(error);
      }
      setLoaded(true);
    }
    handleText();
  }, []);

  const extractDialogues = (text : any) => {
    const dialogueRegex = /^([A-Z ]+):\s*([\s\S]*?)(?=(?:^[A-Z ]+:)|$)/gm;
    const matches = [...text.matchAll(dialogueRegex)];
    return matches.map(match => ({
      character: match[1].trim(),
      dialogue: match[2].trim()
    }));
  };

  const getRandomDialogue = (dialogues : any) => {
    const randomIndex = Math.floor(Math.random() * dialogues.length);
    const selectedDialogue = dialogues[randomIndex];
    return `${selectedDialogue.character}: ${selectedDialogue.dialogue}`;
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6 ">
      <div className="flex flex-col sm:flex-row items-center justify-center max-h-screen w-[1000px] border-2 p-4 rounded-lg ">
        <div className="flex-shrink-0 text-wrap">
          <svg
            viewBox="0 0 400 350"
            xmlns="http://www.w3.org/2000/svg"
            width={400}
            className="bg-black text-white p-4 rounded-lg"
          >
            <text
              x="10"
              y="20"
              fontFamily="monospace"
              fontSize="8"
              fill="white"
              xmlSpace="preserve"
            >
              {stop_exe.split('\n').map((line, index) => (
                <tspan key={index} x="10" dy="1.2em">
                  {line}
                </tspan>
              ))}
            </text>
          </svg>
        </div>
        <div className="text-white mt-4 sm:mt-0 sm:ml-4 flex-grow">
          {loaded && <TextGenerateEffect words={displayTxt} />}
        </div>
      </div>
      
      <span className=" mt-10">{"blog coming soon.."} <span>Go back <Link className=" text-green-300 hover:text-green-400" href={"/"}>Home</Link></span></span>
    </div>
    
    </>
  );
}