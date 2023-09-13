import Image from "next/image";
import Sidebar from "./sidebar";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

function getMonthName(dateString) {
  const date = new Date(dateString);
  const options = { month: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  const releaseDate = movie.release_date;
  const monthName = getMonthName(releaseDate);

  return (
    <>
      <Sidebar />
      {/* <div className="w-full bg-rose">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-lg"
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt={movie.title}
          ></Image>
          <div className="p-2">
            <h2 className="text-[24px] md:text-3xl mb-3 font-bold text-amber-500">
              {movie.title || movie.name}
            </h2>
            <p className="text-lg mb-3 text-justify">
              <span className="font-semibold mr-1 text-amber-500">
                Overview:
              </span>
              {movie.overview}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1 text-amber-500">
                Date Released:
              </span>
              {monthName} {releaseDate.substr(8, 2)}, {releaseDate.substr(0, 4)}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1 text-amber-500">Rating:</span>
              {movie.vote_count} likes
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

// https://www.themoviedb.org/movie
