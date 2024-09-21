'use client';
import { useTheme } from "@/context/themeContext";
import { useState, useEffect, useRef } from "react";

const staticMessage1 = "<Hello>";
const staticMessage2 = "<World>";
const fullMessage = "<Hello-World>";

interface Column {
  chars: string[];
  speed: number;
}

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [matrixColumns, setMatrixColumns] = useState<Column[]>([]);

  const generateMatrixContent = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=^<>[]{}";
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const columnCount = Math.floor(dimensions.width / 20);
    const rowCount = Math.floor(dimensions.height / 20);

    const messageStartCol = dimensions.width < 300
      ? [
          Math.floor((columnCount - staticMessage1.length) / 2),
          Math.floor((columnCount - staticMessage2.length) / 2)
        ]
      : [Math.floor((columnCount - fullMessage.length) / 2)];

    const messageRows = dimensions.width < 300
      ? [Math.floor(rowCount / 2) - 1, Math.floor(rowCount / 2)]
      : [Math.floor(rowCount / 2)];

    let columns: Column[] = Array(columnCount)
      .fill(null)
      .map((_, colIndex) => ({
        chars: Array(rowCount)
          .fill(null)
          .map((_, rowIndex) => {
            if (dimensions.width < 300) {
              if (
                colIndex >= messageStartCol[0] &&
                colIndex < messageStartCol[0] + staticMessage1.length &&
                rowIndex === messageRows[0]
              ) {
                return staticMessage1[colIndex - messageStartCol[0]];
              }
              if (
                colIndex >= messageStartCol[1] &&
                colIndex < messageStartCol[1] + staticMessage2.length &&
                rowIndex === messageRows[1]
              ) {
                return staticMessage2[colIndex - messageStartCol[1]];
              }
            } else {
              if (
                colIndex >= messageStartCol[0] &&
                colIndex < messageStartCol[0] + fullMessage.length &&
                rowIndex === messageRows[0]
              ) {
                return fullMessage[colIndex - messageStartCol[0]];
              }
            }
            return generateMatrixContent();
          }),
        speed: Math.random() * 2 + 1,
      }));

    const interval = setInterval(() => {
      columns = columns.map((column, colIndex) => ({
        ...column,
        chars: column.chars.map((char, rowIndex) => {
          if (dimensions.width < 300) {
            if (
              (colIndex >= messageStartCol[0] &&
                colIndex < messageStartCol[0] + staticMessage1.length &&
                rowIndex === messageRows[0]) ||
              (colIndex >= messageStartCol[1] &&
                colIndex < messageStartCol[1] + staticMessage2.length &&
                rowIndex === messageRows[1])
            ) {
              return char; // Keep the static message characters unchanged
            }
          } else {
            if (
              colIndex >= messageStartCol[0] &&
              colIndex < messageStartCol[0] + fullMessage.length &&
              rowIndex === messageRows[0]
            ) {
              return char; // Keep the static message characters unchanged
            }
          }
          return rowIndex === 0
            ? generateMatrixContent()
            : column.chars[rowIndex - 1];
        }),
      }));
      setMatrixColumns(columns);
    }, 100);

    return () => clearInterval(interval);
  }, [dimensions]);

  return (
    <div id="waves" className="w-screen h-full overflow-hidden rounded-lg border-black dark:bg-black">
      <div className=" w-screen h-screen animate-pad">
        <div className="w-full h-full">
        <svg
          ref={svgRef}
          id="bannerSVG"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className=" relative w-full h-full"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          {matrixColumns.map((column, colIndex) =>
            column.chars.map((char, rowIndex) => {
              const messageStartCol = dimensions.width < 300
                ? [
                    Math.floor((matrixColumns.length - staticMessage1.length) / 2),
                    Math.floor((matrixColumns.length - staticMessage2.length) / 2)
                  ]
                : [Math.floor((matrixColumns.length - fullMessage.length) / 2)];

              const messageRows = dimensions.width < 300
                ? [Math.floor(column.chars.length / 2) - 1, Math.floor(column.chars.length / 2)]
                : [Math.floor(column.chars.length / 2)];

              const isStaticChar = dimensions.width < 300
                ? (colIndex >= messageStartCol[0] &&
                    colIndex < messageStartCol[0] + staticMessage1.length &&
                    rowIndex === messageRows[0]) ||
                  (colIndex >= messageStartCol[1] &&
                    colIndex < messageStartCol[1] + staticMessage2.length &&
                    rowIndex === messageRows[1])
                : colIndex >= messageStartCol[0] &&
                  colIndex < messageStartCol[0] + fullMessage.length &&
                  rowIndex === messageRows[0];

              return (
                <text
                  key={`${colIndex}-${rowIndex}`}
                  x={(colIndex + 0.5) * (dimensions.width / matrixColumns.length)}
                  y={(rowIndex + 0.5) * (dimensions.height / column.chars.length)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`font-mono ${isStaticChar ? "animate-pulse" : ""} dark:fill-white fill-black`}
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {char}
                </text>
              );
            })
          )}
        </svg>
        </div>
      </div>
      <a href="#about">
        <button className="flex items-center justify-center w-fit p-2 px-4 min-w-max text-sm font-bold text-center hover:bg-opacity-100 active:bg-opacity-90 rounded-full backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 absolute bottom-4 right-1/2 z-10 translate-x-1/2 dark:bg-zinc-800/40 dark:hover:bg-zinc-700/50 bg-zinc-800 hover:bg-zinc-800/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            height="20"
            className="inline text-slate-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  );
}
