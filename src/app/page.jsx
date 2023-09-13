const API_KEY = process.env.API_KEY;
export const dynamic = "force-dynamic";
import Header from "@/components/Header";
import Results from "@/components/Results";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data.results.slice(0, 10);

  console.log(results);

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="flex justify-between lg:px-16">
          <span className="text-black font-dmsans text-3xl font-bold ">
            Featured Movie
          </span>
          <Link
            href="#"
            className="flex items-center text-rose font-medium hover:font-bold"
          >
            See more
            <AiOutlineRight />
          </Link>
        </div>
        <Results results={results} />
      </div>
    </>
  );
}
