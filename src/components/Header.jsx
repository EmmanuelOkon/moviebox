"use client";

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import styles from "../app/styles.module.css";

import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header({ navbarStyles }) {
  const [activeItem, setActiveItem] = useState("/");

  //   const handleItemClick = (address) => {
  //     setActiveItem(address);
  //   };

  return (
    <div
      className={`${styles.heroPoster} bg-rose items-center justify-between sm:mx-auto`}
    >
      <Navbar navbarStyles={navbarStyles} />
      <Hero />
    </div>
  );
}
