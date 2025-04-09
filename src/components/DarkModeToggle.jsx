"use client";
import { useEffect, useState } from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded text-xl"
    >
      {isDark ? <RiSunLine /> : <RiMoonClearLine />}
    </button>
  );
}
