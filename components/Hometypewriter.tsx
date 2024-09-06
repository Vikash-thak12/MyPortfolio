"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function Hometypewriter() {
  const words = [
    {
      text: "Welcome",
      className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "To My Portfolio",
      className: "text-blue-500 dark:text-blue-500"
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
