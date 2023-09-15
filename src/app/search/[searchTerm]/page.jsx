import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results.slice(0, 10);

  return (
    <div>
      {results && results.length === 0 && (
        <>
          <Navbar homePage={false} />
          <h1 className="text-center pt-6">No results found</h1>
        </>
      )}

      {results && (
        <>
          <Navbar homePage={false} />
          <div className="flex justify-center px-4 lg:px-16 ">
            <h1 className="text-center pt-6 lg:py-3 text-lg font-dmsans lg:text-3xl font-bold">
              Search Results:
            </h1>
          </div>
          <Results results={results} />
          <Footer />
        </>
      )}
    </div>
  );
}
