"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="hidden lg:flex border-2 px-4 border-white rounded-[6px] w-[50%] mxauto justify-between items-center px5 "
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="What do you want to watch?"
        className="w-full h-12 text-blue bg-rose font-dmsans bg-opacity-0 placeholder-white outline-none "
      />
      <BiSearch
        className="h-8 w-8 outline-0   "
        // strokeWidth="0.1"
        stroke="#FFF"
        aria-hidden="true"
      />
      {/* <button
        // disabled={!search}
        type="submit"
        className="text-black h-14 px-4 rounded-r-md  bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:text-gray-300"
      >
        
      </button> */}
    </form>
  );
}
