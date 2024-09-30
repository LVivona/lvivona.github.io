"use client";
import { TextGenerateEffect } from "@/components/text-generate";
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


export function BeeMovieComponent(){
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
        <div className="flex-shrink-0">
        <svg
          viewBox="0 0 400 350"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-full p-4 rounded-lg "
        >
          <text
            x="10"
            y="20"
            fontFamily="monospace"
            fontSize="8"
            className=" dark:fill-white fill-black"
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
      <div className="  mt-4 sm:mt-0 sm:ml-4 flex-grow">
        {loaded && <span className="animate-translateUp">{displayTxt}</span>}
      </div>
    </>)
}