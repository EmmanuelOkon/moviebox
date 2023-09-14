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
    <>
      <form
        onSubmit={handleSubmit}
        className="hidden lg:flex border-2 px-4 border-white rounded-[6px] w-[50%] justify-between items-center 
      "
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="What do you want to watch?"
          className="w-full h-12 font-medium placeholder:font-medium text-white bg-rose font-dmsans bg-opacity-0 placeholder-white outline-none"
        />
        <button
          disabled={!search}
          type="submit"
          className="text-white h-8 hover:cursor-pointer"
        >
          <BiSearch
            className="h-8 w-8 outline-0"
            stroke="#FFF"
            aria-hidden="true"
          />
        </button>
      </form>

      <div className="hidden">
        <BiSearch
          className="h-8 w-8 outline-0"
          stroke="#FFF"
          aria-hidden="true"
        />
      </div>
    </>
  );
}
