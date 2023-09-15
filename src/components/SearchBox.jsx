"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchBox({ searchPage }) {
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
        className={classNames(
          searchPage ? "border-deepGray  " : "border-white  ",
          "mx-3 flex h-10 border-[3px] px-2 md:px-4 rounded-[6px] w-full lg:w-full justify-between items-center"
        )}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={placeholderText}
          className={classNames(
            searchPage
              ? "placeholder-deepGray text-deepGray bg-white"
              : "placeholder-white text-white bg-rose",
            "w-full flex items-center font-semibold placeholder:text-sm placeholder-font-normal md:placeholder:font-semibold  font-dmsans bg-opacity-0 outline-none"
          )}
        />
        <button
          disabled={!search}
          type="submit"
          className={classNames(
            searchPage ? "text-deepGray" : "text-white",
            " flex h-6 lg:h-8 hover:cursor-pointer"
          )}
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
