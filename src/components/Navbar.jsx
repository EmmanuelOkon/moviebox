import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { TbMenu } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="flex w-full max-w[1380px] mx-auto justify-between items-center text-white px-4 md:px-10 lg:px-16 py-2">
      <Link
        className="gap-2 text-xl font-bold flex items-center  lg:gap-4 font-poppins outline-0 text-white"
        href="/"
      >
        <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        MovieBox
      </Link>
      <SearchBox />
      <div className="flex items-center gap-2">
        <Link
          className="text-base lg:text-xl font-medium font-dmsans rounded-full lg:p-[24px] text-white"
          href="#"
        >
          Sign in
        </Link>

        <span className="p-[10px] rounded-full hover:cursor-pointer bg-rose">
          <TbMenu
            className="h-4 w-4 lg:h-10 lg:w-10 outline-0 text-white"
            strokeWidth="3"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
}
