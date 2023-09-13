"use client";

import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="cursor-pointer pr-4 flex ">
      {mounted &&
        (currentTheme === "dark" ? (
          <BsFillSunFill
            onClick={() => setTheme("light")}
            className="text-2xl  hover:text-amber-400"
          />
        ) : (
          <BsMoonFill
            onClick={() => setTheme("dark")}
            className="text-2xl text-slate-500  hover:text-amber-500"
          />
        ))}
    </div>
  );
}

