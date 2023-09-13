import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="px-4 bg-white sm:grid sm:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w6xl mxauto lg:px-16 py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
