"use client";

import Navbar from "@/components/navbar";
import { fetchRepositoryWithLatestCommit } from "@/lib/github";
import { useState, useEffect } from "react";

const ASCII_TITLE = `
 /$$$$$$$                                               /$$             
| $$__  $$                                             | $$             
| $$  \\ $$ /$$$$$$   /$$$$$$  /$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$$$$$$
| $$$$$$$//$$__  $$ /$$__  $$|__/ /$$__  $$ /$$_____/|_  $$_/  /$$_____/
| $$____/| $$  \\__/| $$  \\ $$ /$$| $$$$$$$$| $$        | $$   |  $$$$$$ 
| $$     | $$      | $$  | $$| $$| $$_____/| $$        | $$ /$$\\____  $$
| $$     | $$      |  $$$$$$/| $$|  $$$$$$$|  $$$$$$$  |  $$$$//$$$$$$$/
|__/     |__/       \\______/ | $$ \\_______/ \\_______/   \\___/ |_______/ 
                        /$$  | $$                                       
                       |  $$$$$$/                                       
                        \\______/                                            
                        
////////////////////////////////////////////////////////////////////////////
                        `;
const REPOS: Record<string, string> = {
  GnosisFoundation: "bintensors",
  LVivona: "safelz4",
};

export default function Projects() {
  const [repoData, setRepoData] = useState<Record<any, any>>({});

  useEffect(() => {
    async function fetchAllRepos() {
      const results: Record<string, any> = {};
      for (const [owner, repo] of Object.entries(REPOS)) {
        try {
          const { repository, commit } = await fetchRepositoryWithLatestCommit(
            owner,
            repo
          );
          results[repo] = {
            repository,
            commit,
          };
        } catch (err) {
          console.error(`Error fetching ${owner}/${repo}:`, err);
        }
      }
      setRepoData(results);
    }
    fetchAllRepos();
  }, []);

  return (
    <div className="dark:bg-black bg-white dark:text-white text-black flex flex-col items-center w-full min-h-screen p-6">
      <Navbar visibleDelay={100} />
      <div className="flex flex-col items-center justify-center w-full max-w-full p-4 pt-20">
        <div className="animate-translateUp w-full flex justify-center">
          <pre className="font-mono sm:text-xs lg:text-sm text-xxxs dark:text-white text-black whitespace-pre overflow-x-auto">
            {ASCII_TITLE}
          </pre>
        </div>
        <div
          id="project"
          className="animate-translateUp w-full max-w-3xl overflow-y-auto max-h-[70vh] p-4 flex flex-col space-y-6 justify-start font-mono px-10 text-sm md:pt-10"
        >
          {/* Uncomment when add octkit. */}
          {/* {Object.entries(REPOS).map(([owner, repo]) => {
            const data = repoData[repo];
            if (data == undefined) {
              return null;
            }
            return (
              <div key={repo} id={repo} className="break-words">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    className="text-purple-400 underline font-bold"
                    href={`https://github.com/${owner}/${repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    **{repo}**
                  </a>
                  <span className="break-words">{data.repository.description}</span>
                  <a href={data.commit.url} className="text-rose-400 underline whitespace-nowrap">
                    {">>"}{data.commit.shortSha}
                  </a>
                </div>
              </div>
            );
          })} */}
          <div key={"bintensors"} id={"bintensors"} className="break-words">
            <div className="flex flex-wrap items-center gap-2">
              <a
                className="text-purple-400 underline font-bold"
                href={`https://github.com/GnosisFoundation/bintensors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                **{"bintensors"}**
              </a>
              <span className="break-words">
                {
                  "Binary tensor format for more efficient storage format for multi-dimensional tensor data, commonly used in machine learning and deep learning applications. "
                }
              </span>
            </div>
          </div>

          <div key={"safelz4"} id={"safelz4"} className="break-words">
            <div className="flex flex-wrap items-center gap-2">
              <a
                className="text-purple-400 underline font-bold"
                href={`https://github.com/LVivona/safelz4`}
                target="_blank"
                rel="noopener noreferrer"
              >
                **{"safelz4"}**
              </a>
              <span className="break-words">
                {
                  "Python bindings for lz4_flex, the fastest pure-Rust implementation of the LZ4 compression algorithm. "
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
