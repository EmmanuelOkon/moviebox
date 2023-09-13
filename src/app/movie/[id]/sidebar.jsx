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

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "Movies", href: "#", icon: BiCameraMovie, current: true },
  { name: "TV Series", href: "#", icon: PiMonitorPlayBold, current: false },
  { name: "Upcoming", href: "#", icon: BsCalendar3, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar(props) {
  const { movie, monthName } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isMovieDataAvailable = !!movie;

  return (
    <div className="h-screen flex overflow-hidden bg-lightGray">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
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
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-800 text-white"
                          : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                <Link href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center bg-rose">
                    <Link href="#" className="flex-shrink-0 w-full group block">
                      <div className="flex items-center ">
                        <TbLogout />
                        <div className="ml-3">
                          <p className="text-lg font-medium font-poppins text-offBlack">
                            Log out
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        Tom Cook home
                      </p>
                      <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                        View profile
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-white rounded-e-[35px] text-deepGray md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
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
                      "group flex items-center px-2 py-5 text-base font-medium"
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
            </div>
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
            <div className="flex-shrink-0 flex rounded-ee-[35px]  p-4">
              <Link href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center ">
                  <TbLogout />
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

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6 bg-rose">
            {isMovieDataAvailable && (
              <div className="w-full bg-rose">
                <div className="w-full bg-rose">
                  <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                      }`}
                      width={500}
                      height={300}
                      className="rounded-lg"
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                      }}
                      placeholder="blur"
                      blurDataURL="/spinner.svg"
                      alt={movie.title}
                    ></Image>
                    <div className="p-2">
                      <h2 className="text-[24px] md:text-3xl mb-3 font-bold text-amber-500">
                        {movie.title || movie.name}
                      </h2>
                      <p className="text-lg mb-3 text-justify">
                        <span className="font-semibold mr-1 text-amber-500">
                          Overview:
                        </span>
                        {movie.overview}
                      </p>
                      <p className="mb-3">
                        <span className="font-semibold mr-1 text-amber-500">
                          Date Released:
                        </span>
                        {monthName} {releaseDate.substr(8, 2)},{" "}
                        {releaseDate.substr(0, 4)}
                      </p>
                      <p className="mb-3">
                        <span className="font-semibold mr-1 text-amber-500">
                          Rating:
                        </span>
                        {movie.vote_count} likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">Hello there</div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
