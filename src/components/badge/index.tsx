import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import Image from "next/image";

export enum Difficulty {
  beginner = "beginner",
  intermediate = "intermediate",
  advance = "advance",
}

export const DifficultyBadge = ({ difficulty }: { difficulty: Difficulty }) => {
  let className;
  switch (difficulty) {
    case "beginner":
      className = "bg-green-400 border-green-600 border-[2px]";
      break;
    case "intermediate":
      className = "bg-yellow-400 border-yellow-600 border-[1px]";
      break;
    default:
      className = "bg-red-400 border-red-600 border-[1px]";
      break;
  }

  return (
    <Badge className={cn(className, "w-fit")}>{difficulty.toString()}</Badge>
  );
};

export enum Program {
  python = "/languages/python.svg",
  clang = "/languages/clang.svg",
  rust = "/languages/rust.svg",
}

export const ProgramBadge = ({ program }: { program: Program }) => {
  let className;
  switch (program) {
    case "/languages/python.svg":
      className = "bg-blue-400 border-blue-600 border-[2px]";
      break;
    case "/languages/clang.svg":
      className = "bg-zinc-700 border-gray-900 border-[1px]";
      break;
    default:
      className = "bg-orange-400 border-orange-600 border-[1px]";
      break;
  }

  return (
    <Badge className={cn(className, "w-fit")}>
      <Image src={program} alt={program} width={20} height={20} />
    </Badge>
  );
};
