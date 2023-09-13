import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { TbMenu } from "react-icons/tb";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Nav({ siteTitle, pathname = "" }) {
  return (
    <Popover className="w-full bg-deepGray z-50 bg- fixed">
      <div className="mx-auto px-6 lg:px20 2xl:w-1/2 2xl:mx-auto">
        <div className="flex justify-between  items-center py6 md:justify-start md:space-x-10">
          <div className="flex justify-start  lg:w-0 lg:flex-1">
            <Link
              className="text-xl text-white font-bold flex items-center gap-4"
              href="/"
            >
              <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
              MovieBox
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400">
              <MenuIcon
                className="h-6 w-6 outline-0"
                strokeWidth="3"
                stroke="#BE123C"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex z-50 space-x-12">
            
            <SearchBox />
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              className="text-xl font-bold bg-rose rounded-full p[24px] "
              href="/"
            >
              <TbMenu
                className="h-6 w-6 outline-0"
                strokeWidth="3"
                stroke="#FFF"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 z-20 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-lg bg-white divide-purple-10">
            <div className="pt-4 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400">
                    <XIcon
                      className="h-6 w-6 outline-0 ring-offset-0 focus:outline-0 "
                      strokeWidth="3"
                      stroke="#BE123C"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 text-left">
              <div className="grid gap-y-4 gap-x-8">
                {/* {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={classNames(
                          isActive
                            ? "text-blue font-extrabold text-lg"
                            : "text-grey hover:border-b-2",
                          "flex items-center px-2 py-2 text-base font-normal"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </Link>
                  );
                })} */}
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue rounded-md">
                  <Link href="/">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-3 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-opacity-5"
                    >
                      <span>Contact Us now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Nav;
