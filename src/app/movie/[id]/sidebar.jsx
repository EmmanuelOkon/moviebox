"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayBold } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: false },
  { name: "Movies", href: "#", icon: BiCameraMovie, current: true },
  { name: "TV Series", href: "/", icon: PiMonitorPlayBold, current: false },
  { name: "Upcoming", href: "/", icon: BsCalendar3, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar(props) {
  const { movie, year, month, day, hours, minutes } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isMovieDataAvailable = !!movie;

  return (
    <div className="h-screen flex overflow-hidden">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden bg-deepGray bg-opacity-60"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 " />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white ">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-3 pt-3">
                  <button
                    type="button"
                    className="ml-1 flex items-center border-2 border-rose justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XIcon className="h-6 w-6 text-rose" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Link
                    className="text-base font-bold flex items-center gap-2 font-poppins outline-0"
                    href="/"
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                    MovieBox
                  </Link>
                </div>
                <nav className="mt-5 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-rose bg-opacity-10 text-rose border-r-[6px] border-rose font-bold "
                          : "text-midGray hover:bg-rose hover:bg-opacity-10 hover:text-rose",
                        "group flex items-center py-5 text-base font-medium px-4"
                      )}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="border-rose border-2 px-4 mx-4 rounded-[20px] font-poppins text-offBlack py-6">
                  <p className="font-semibold text-[16px] tracking-normal leading- pb-5 ">
                    Play movie quizes and earn <br /> free tickets
                  </p>
                  <span className="font-medium text-base ">
                    50k people are playing now
                  </span>
                  <div className="mt-2 text-center">
                    <button className=" rounded-[25px] bg-rose bg-opacity-20 text-rose p-[12px] px-[20px] hover:bg-opacity-70 hover:font-bold hover:text-white font-medium ">
                      Start playing
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex p-4">
                <div className="flex items-center">
                  <Link href="#" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center ">
                      <TbLogout
                        className="mr-3 flex-shrink-0 h-6 w-6"
                        aria-hidden="true"
                      />
                      <div className="ml-3">
                        <p className="text-lg font-medium font-poppins text-offBlack">
                          Log out
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-white border border-black border-opacity-30 rounded-e-[35px] text-deepGray md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link
                  className="text-bas lg: text-xl font-bold flex items-center lg:gap-4 font-poppins outline-0"
                  href="/"
                >
                  <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                  MovieBox
                </Link>
              </div>
              <nav className="mt-10 flex-1 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-rose bg-opacity-10 text-rose border-r-[6px] border-rose font-bold "
                        : "text-midGray hover:bg-rose hover:bg-opacity-10 hover:text-rose",
                      "group flex items-center px-4 py-5 text-base font-medium"
                    )}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="border-rose border-2 px-4 mx-4 rounded-[20px] font-poppins text-offBlack py-6">
                <p className="font-semibold text-[20px] tracking-wide leading-6 pb-5 ">
                  Play movie quizes and earn <br /> free tickets
                </p>
                <span className="font-medium text-lg ">
                  50k people are playing now
                </span>
                <div className="mt-4 text-center">
                  <button className=" rounded-[30px] bg-rose bg-opacity-20 text-rose p-[14px] px-[26px] hover:bg-opacity-70 hover:font-bold hover:text-white font-medium ">
                    Start playing
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex rounded-ee-[35px]  p-4">
              <Link href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center ">
                  <TbLogout
                    className="mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  <div className="ml-3">
                    <p className="text-lg font-medium font-poppins text-offBlack">
                      Log out
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden ">
        <div className="md:hidden flex justify-between items-center px-3 py-2 ">
          <Link
            className="text-base font-bold flex items-center gap-2 font-poppins outline-0"
            href="/"
          >
            <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
            MovieBox
          </Link>
          <button
            type="button"
            className="-ml-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md  focus:outline-0 focus:ring-inset focus:ring-0 "
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="h-6 w-6 text-rose" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {isMovieDataAvailable && (
            <div className="w-full bg-white">
              <div className="py-4 md:pt-8 flex w-[80%] mx-auto md:w-full items-center justify-center content-center md:spacex-6">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${
                    props.movie.backdropPath || props.movie.posterPath
                  }`}
                  width={1000}
                  height={10}
                  className="rounded-md md:rounded-lg bg-contain bg-center  "
                  style={{
                    maxWidth: "100%",
                  }}
                  placeholder="blur"
                  blurDataURL="/spinner.svg"
                  alt={props.movie.title}
                ></Image>
              </div>
            </div>
          )}
          <div className="px-4 sm:px-6 md:px8 grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white ">
              <div className="bg-">
                <div className="text-center text-white w-full flex items-center">
                  <p className="flex items-center  w-fit rounded-md text-[18px] md:text-2xl font-bold text-deepGray font-poppins">
                    {props.movie.title || props.movie.name}
                    <span className="mx-2">•</span>
                    {year}
                    <span className="mx-2">•</span>
                    PG-13
                    <span className="mx-2">•</span>
                    {hours}h {minutes}m
                  </p>
                  <div className="ml-2 flex items-center gap-2">
                    <span className="border border-offWhite text-deepRose rounded-2xl text-[14px] font-medium px-[10px] py-[1px] ">
                      Action
                    </span>
                    <span className="border border-offWhite text-deepRose rounded-2xl text-[14px] font-medium px-[10px] py-[1px]">
                      Drama
                    </span>
                  </div>
                </div>
                <p className="text-lg font-poppins text-offBlack text-justify mt-4">
                  {props.movie.overview}
                </p>

                <div className="divide-y divide-[#E8E8E8] divide-opacity-25 ">
                  <p className="my-3 py-3 text-rose text-lg border-t border-[#E8E8E8] border-opacity-25 font-poppins ">
                    <span className="font-normal text-lg mr-1 text-offBlack ">
                      Director :
                    </span>
                    Joseph Kosinski
                  </p>
                  <p className="my-3 py-3 text-rose text-lg font-poppins ">
                    <span className="font-normal text-lg mr-1 text-offBlack ">
                      Writers :
                    </span>
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </p>
                  <p className="my-3 py-3 text-rose text-lg font-poppins ">
                    <span className="font-normal text-lg mr-1 text-offBlack ">
                      Stars :
                    </span>
                    Tom Cruise, Jennifer Connelly, Miles Teller
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full grid grid-cols-1">
                <div className="flex items-center justify-end gap-2 ">
                  <BsStarFill
                    className="h-6 w-6 text-[#FFFF00]"
                    aria-hidden="true"
                  />
                  <div className="flex items-center">
                    <span className="text-lightGray font-normal text-lg ">
                      {props.movie.voteAverage}
                    </span>
                    <span className="text-offBlack px-2 font-extrabold">|</span>
                    <span className="text-offBlack font-normal text-lg ">
                      {props.movie.voteCount}
                    </span>
                  </div>
                </div>

                <p className="mb-3">
                  <span className="font-semibold mr-1 ">Rating:</span>
                  {props.movie.popularity}
                </p>
                <button className="bg-rose w-full rounded-xl flex items-center justify-center py-4 gap-3">
                  <IoTicketOutline
                    className="h-7 w-7 text-white"
                    aria-hidden="true"
                  />
                  <span className="text-white font-medium text-lg font-poppins">
                    See Showtimes
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
