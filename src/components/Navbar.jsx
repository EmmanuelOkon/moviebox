import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { TbMenu } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ homePage }) {
  return (
    <div className="flex w-full max-w[1380px] mx-auto justify-between items-center text-white px-4 md:px-10 lg:px-16 py-2">
      <Link
        href="/"
        className={classNames(
          homePage ? "text-white " : "text-deepGray ",
          "w-1/2 lg:w-full gap-2 text-xl font-bold flex items-center lg:gap-4 font-poppins outline-0 "
        )}
      >
        <Image
          className=""
          src="/assets/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <span
          className={classNames(
            homePage ? "text-white " : "text-deepGray ",
            "hidden md:flex text-xl font-bold font-poppins outline-0 "
          )}
        >
          MovieBox
        </span>
      </Link>

      <SearchBox searchPage={!homePage} />

      <div className="w-1/2 lg:w-full flex items-center justify-end gap-2">
        <Link
          className={classNames(
            homePage ? "text-white " : "text-deepGray ",
            "hidden md:flex text-base lg:text-xl font-medium lg:font-bold font-dmsans rounded-full lg:p-[24px]"
          )}
          href="#"
        >
          Sign in
        </Link>

        <span className="p-[10px] rounded-full hover:cursor-pointer bg-rose">
          <TbMenu
            className={classNames(
              homePage ? "text-white " : "text-deepGray ",
              "h-4 w-4 lg:h-10 lg:w-10 outline-0"
            )}
            strokeWidth="3"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
}
