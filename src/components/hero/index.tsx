import { useState, useEffect, useRef } from "react";

const staticMessage = "[Hello-World]";

interface HeroSectionProps {
  loading: boolean;
}

interface Column {
  chars: string[];
  speed: number;
}

export default function HeroSection() {
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

    const messageStartCol = Math.floor((columnCount - staticMessage.length) / 2);
    const messageRow = Math.floor(rowCount / 2);

    let columns: Column[] = Array(columnCount)
      .fill(null)
      .map((_, colIndex) => ({
        chars: Array(rowCount)
          .fill(null)
          .map((_, rowIndex) => {
            if (
              colIndex >= messageStartCol &&
              colIndex < messageStartCol + staticMessage.length &&
              rowIndex === messageRow
            ) {
              return staticMessage[colIndex - messageStartCol];
            }
            return generateMatrixContent();
          }),
        speed: Math.random() * 2 + 1,
      }));

    const interval = setInterval(() => {
      columns = columns.map((column, colIndex) => ({
        ...column,
        chars: column.chars.map((char, rowIndex) => {
          if (
            colIndex >= messageStartCol &&
            colIndex < messageStartCol + staticMessage.length &&
            rowIndex === messageRow
          ) {
            return char; // Keep the static message characters unchanged
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
    <div id="waves" className="w-screen h-screen overflow-hidden p-10 rounded-lg border-black animate-pad">
      <svg
        ref={svgRef}
        id="bannerSVG"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="w-full h-full text-left"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        {matrixColumns.map((column, colIndex) =>
          column.chars.map((char, rowIndex) => {
            const messageStartCol = Math.floor(
              (matrixColumns.length - staticMessage.length) / 2
            );
            const messageRow = Math.floor(
              column.chars.length / 2
            );
            const isStaticChar =
              colIndex >= messageStartCol &&
              colIndex < messageStartCol + staticMessage.length &&
              rowIndex === messageRow;
            return (
              <text
                key={`${colIndex}-${rowIndex}`}
                x={colIndex * 20}
                y={rowIndex * 20}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`font-mono ${isStaticChar && "animate-pulse"}`}
                style={{
                  fill: !isStaticChar
                    ? "#ffffff"
                    : rowIndex !== 0
                    ? "#ffffff"
                    : `rgba(0, 255, 0, ${
                        1 - rowIndex / column.chars.length
                      })`,
                  fontSize: isStaticChar ? "18px" : "14px",
                }}
              >
                {char}
              </text>
            );
          })
        )}
      </svg>
      <a href="#about">
        <button className="flex items-center justify-center w-fit p-2 px-5 min-w-max text-sm font-bold text-center hover:bg-opacity-100 active:bg-opacity-90 rounded-full backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 absolute bottom-4 right-1/2 z-10 translate-x-1/2 bg-slate-800/20 hover:bg-slate-700/50">
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
