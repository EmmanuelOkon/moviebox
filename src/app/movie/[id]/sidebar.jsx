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

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                    <div>
                      <Image
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
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
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
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
