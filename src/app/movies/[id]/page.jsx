import Sidebar from "./sidebar";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

function formatVoteCount(voteCount) {
  if (voteCount >= 1000) {
    const kVoteCount = Math.floor(voteCount / 1000);
    return `${kVoteCount}k`;
  } else {
    return voteCount.toString();
  }
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  const releaseDate = movie.release_date;
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
    title: movie.title,
    overview: movie.overview,
    voteCount: formatVoteCount(movie.vote_count),
    backdropPath: movie.backdrop_path,
    posterPath: movie.poster_path,
    popularity: movie.popularity,
    voteAverage: movie.vote_average,
    runtime: movie.runtime,
    relDate: `${day}-${abbreviatedMonth}-${year}`,
  };

  const utcRelDate = new Date(`${year}-${month}-${day} UTC`).toUTCString();
  movieData.relDate = utcRelDate;

  return (
    <>
      <Sidebar movie={movieData} year={year} />
    </>
  );
}
