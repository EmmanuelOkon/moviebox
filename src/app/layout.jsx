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
    // Simulate a delay (e.g., fetching data) - Replace this with your actual data fetching logic
    const delay = setTimeout(() => {
      // Step 4: When data is fetched, set isLoading to false
      setIsLoading(false);
      clearTimeout(delay);
    }, 4000); // Simulated 2-second delay, replace with your actual fetching logic
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
