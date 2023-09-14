"use client";

// import Header from "@/components/Header";
import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import "@fontsource/dm-sans";
import "@fontsource/poppins";
import Loading from "./loading";
// import SearchBox from "@/components/SearchBox";

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
