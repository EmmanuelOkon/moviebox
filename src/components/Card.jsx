"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function Card({ result }) {
  const releaseDate = result.release_date;
  const [year, month, day] = releaseDate.split("-");

  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const abbreviatedMonth = monthAbbreviations[parseInt(month) - 1];

  const movieData = {
    relDate: `${day}-${abbreviatedMonth}-${year}`,
  };

  return (
    <div className="my-[20px] bg-ros cursor-pointer sm:hover:shadow-md transition-shadow duration-200 group">
      <Link className="" href={`/movies/${result.id}`} data-testid="movie-card">
        <div className="flex relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.poster_path || result.backdrop_path
            }`}
            width={500}
            height={100}
            className=" group-hover:opacity-80 transition-opacity duration-200 "
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt={result.title}
            data-testid="movie-poster"
          ></Image>
          <FaHeart className="text-lightGray bg-lightGray bg-opacity-30 p-2 rounded-full w-8 h-8 absolute right-0 mr-2 mt-2 cursor-pointer" />
        </div>
        <div className="py-2 px-3 flex flex-col justify-between">
          <span
            className="text-lightGray text-[12px] font-semibold tracking-widest"
            data-testid="movie-release-date"
          >
            {movieData.relDate}
          </span>
          <h2
            className="font-dmsans text-[24px] md:text-2xl font-bold text-deepGray"
            data-testid="movie-title"
          >
            {result.title || result.name}
          </h2>
          <div className="flex justify-between text-deepGray ">
            <span className="flex items-center gap-3 font-dmsans font-normal">
              <Image
                src="/assets/imdbb.png"
                className="w-14 "
                alt="imdb"
                width={100}
                height={100}
              />
              86.0 / 100
            </span>
            <span className="flex items-center gap-3 font-dmsans font-normal">
              <Image
                src="/assets/tomatoe.png"
                className="w-6"
                alt="tomatoe"
                width={50}
                height={50}
              />
              97%
            </span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-lightGray font-dmsans font-medium ">
              Animation, Action, Drama
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
