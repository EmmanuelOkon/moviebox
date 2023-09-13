"use client";

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import styles from "../app/styles.module.css";

// import Image from "next/image";
import Navbar from "./Navbar";
import Nav from "./Nav";
import Hero from "./Hero";
// import Link from "next/link";

export default function Header() {
  const [activeItem, setActiveItem] = useState("/");

  //   const handleItemClick = (address) => {
  //     setActiveItem(address);
  //   };

  return (
    <div
      className={`${styles.heroPoster} bg-rose lg:fle items-center justify-between sm:mx-auto`}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
