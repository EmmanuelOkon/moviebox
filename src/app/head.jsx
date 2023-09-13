export const Metadata = {
  title: "Movie Box",
  description: "A database for movies",
  keywords: [
    "movie",
    "movies",
    "moviebox",
    "clone",
    "movie",
    "database",
    "react",
    "next",
    "tailwind",
  ],
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
    </>
  );
}
