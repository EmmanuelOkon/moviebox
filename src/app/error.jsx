"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button
        className="hover:bg-amber-700 bg-amber-600 px-4 py-2 rounded-md mt-4"
        onClick={() => reset()}
      >
        Try Again!
      </button>
    </div>
  );
}