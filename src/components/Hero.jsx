import Link from "next/link";
import React from "react";
import { HiOutlinePlay } from "react-icons/hi";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:grid grid-cols-3  w-full lg:pb-20 pt-[3.2rem] lg:px-16">
      <div className="m-auto py5 text-center lg:text-left  ">
        <div className="lg:w-full lg:mx-0 w-[70%] mx-auto  ">
          <h1 className="font-dmsans text-[2.2rem] leading-tight lg:leading-[1.2] lg:tracking-wider font-bold text-white lg:text-5xl">
            John Wick 3 : Parabellum
          </h1>
          <div className="flex gap-6 text-white justify-center lg:justify-start py-3 ">
            <span className="flex items-center gap-3 font-dmsans">
              <Image
                src="/assets/imdbb.png"
                className="w-14 "
                alt="imdb"
                width={100}
                height={100}
              />
              86.0 / 100
            </span>
            <span className="flex items-center gap-3 font-dmsans">
              <Image
                src="/assets/tomatoe.png"
                className="w-6"
                alt="tomatoe"
                width={50}
                height={50}
              />
              97%
            </span>
          </div>
          <p className="mt-3 tracking-wide max-w-md font-medium font-dmsans text-white text-lg sm:text-xl lg:mt-5 md:max-w-3xl">
            {`
          John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.`}
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 rounded-md shadow sm:mt-0 ">
              <Link
                href="#"
                className="w-full flex items-center justify-center  text-base font-medium rounded-md text-white bg-rose hover:bg-opacity-50 border-[3px]  border-rose md:py-2 md:text-lg md:px-4"
              >
                <HiOutlinePlay
                  className="h-12 w-12 outline-0 text-lg bg-whit p[10px] text-white   "
                  strokeWidth="1"
                  stroke="#FFF"
                  //   fill="#FFF"
                  aria-hidden="true"
                />
                WATCH TRAILER
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-1 pb-5"></div> */}
    </div>
  );
};

export default Hero;
