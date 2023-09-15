"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

export default function SearchBox({ styles }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  const placeholderText =
    window.innerWidth <= 426 ? "Search" : "What do you want to watch?";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`mx-3 flex h-10 border-2 px-2 md:px-4 border-${
          styles.borderColor || "white"
        } rounded-[6px] w-full lg:w-full justify-between items-center `}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={placeholderText}
          className={`w-full flex items-center font-medium placeholder:text-sm placeholder-${
            styles.placeholderColor || "font-normal"
          } md:placeholder:font-medium text-white bg-rose font-dmsans bg-opacity-0 placeholder-white outline-none`}
        />
        <button
          disabled={!search}
          type="submit"
          className="text-white flex h-6 lg:h-8 hover:cursor-pointer"
        >
          <BiSearch
            className="h-6 w-6 lg:h-8 lg:w-8 outline-0"
            stroke="#FFF"
            aria-hidden="true"
          />
        </button>
        <style jsx>{`
          @media (max-width: 640px) {
            input::placeholder {
              content: "Search";
              font-weight: normal;
            }
          }
          @media (min-width: 641px) {
            input::placeholder {
              content: "What do you want to watch?";
              font-weight: medium;
            }
          }
        `}</style>
      </form>
    </>
  );
}

// const defaultStyles = {
//   container:
//     "mx-3 flex h-10 border-2 px-2 md:px-4 border-white rounded-[6px] w-full lg:w-full justify-between items-center",
//   input:
//     "w-full flex items-center font-medium placeholder:text-sm placeholder:font-normal md:placeholder:font-medium text-white bg-rose font-dmsans bg-opacity-0 placeholder-white outline-none",
//   button: "",
// };
