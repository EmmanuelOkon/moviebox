"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-deepGray dark:text-white text-dustBlack transition-colors duration-300 min-h-screen">{children}</div>
    </ThemeProvider>
  );
}