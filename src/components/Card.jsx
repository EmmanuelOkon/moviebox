import Image from "next/image";
import Link from "next/link";
import { BiSolidLike } from "react-icons/bi";

export default function Card({ result }) {
  return (
    <div className="my-[20px] bg-ros cursor-pointer sm:p3 border border-black border-opacity-20 sm:hover:shadow-md transition-shadow duration-200 group">
      <Link className="" href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.poster_path || result.backdrop_path
          }`}
          width={500}
          height={100}
          className=" group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={result.title}
        ></Image>
        <div className="py-2 px-3 flex flex-col justify-between">
          <h2 className="truncat text-[24px] md:text-2xl font-bold text-amber-600">
            {result.title || result.name}
            home
          </h2>
          <p className="line-clamp-3 text-base leading-6 sm:leading-tight md:text-base tracking-tighter leaing-3">
            {result.overview}
          </p>
          <div className="flex items-center justify-between mt-4">
            <p>{result.release_date || result.first_air_date}</p>
            <span className="flex items-center justify-end">
              <BiSolidLike className="h-5 mr-1 ml-3 text-amber-600" />
              {result.vote_count}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
