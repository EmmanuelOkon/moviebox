import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <>
      <Header />
      <Navbar />
      <div className="not-fond text-center justify-center items-center h-screen my-[100px] bg-re-500">
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the
          <Link  href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;