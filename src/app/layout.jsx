"use client";

// import Header from "@/components/Header";
import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import "@fontsource/dm-sans";
import "@fontsource/poppins";
import Loading from "./loading";
// import SearchBox from "@/components/SearchBox";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Box",
  description: "A database for movies",
  keywords: [
    "movie",
    "movies",
    "moviebox",
    "clone",
    "movie",
    "database",
    "react",
    "next",
    "tailwind",
  ],
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 4000);
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading ? (
          <div className="spinner">
            <Loading />
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
