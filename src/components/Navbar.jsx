import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { TbMenu } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="flex w-full max-w[1380px] mx-auto justify-between items-center text-white lg:px-16 py-2">
      <Link
        className="text-bas lg: text-xl font-bold flex items-center lg:gap-4 font-poppins outline-0"
        href="/"
      >
        <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        MovieBox
      </Link>
      <SearchBox className="" />
      <div className="flex items-center gap-2">
        <Link
          className="text-base lg:text-xl font-medium font-dmsans rounded-full lg:p-[24px] "
          href="#"
        >
          Sign in
        </Link>

        <span className="p-[10px] bg-rose rounded-full hover:cursor-pointer">
          <TbMenu
            className="h-2 w-2 lg:h-10 lg:w-10 outline-0 bg-rose rounded-full  "
            strokeWidth="3"
            stroke="#FFF"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
}
