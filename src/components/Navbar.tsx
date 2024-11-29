"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../img/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`px-5 py-2 flex justify-between items-center duration-300 md:px-20 lg:px-40 ${
          isChecked ? "bg-[var(--black-color)]" : "bg-[var(--background)]"
        }`}
      >
        <div>
          <Image src={Logo} alt="logo" width={250} />
        </div>
        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <label>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center scale-[175%]">
              <input
                className="hidden peer"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div className="w-[50%] h-[2px] bg-[var(--white-color)] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]" />
              <div className="w-[50%] h-[2px] bg-[var(--white-color)] rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
              <div className="w-[50%] h-[2px] bg-[var(--white-color)] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]" />
            </div>
          </label>
        </div>
        {/* Navigation links for larger screens */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="#start">Start</Link>
          </li>
          <li>
            <Link href="#about">O nas</Link>
          </li>
          <li>
            <Link href="#work">Prace</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* Dropdown menu for small screens */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full pt-20 flex flex-col items-center justify-center duration-300 -z-10 ${
          isChecked ? "translate-y-0 bg-[var(--black-color)]" : "-translate-y-full bg-[var(--background)]"
        }`}
      >
        <ul className="text-center">
          <li className="my-5 text-3xl duration-200 hover:opacity-50">
            <Link onClick={() => setIsChecked(false)} href="#start">
              Start
            </Link>
          </li>
          <li className="my-5 text-3xl duration-200 hover:opacity-50">
            <Link onClick={() => setIsChecked(false)} href="#about">
              O nas
            </Link>
          </li>
          <li className="my-5 text-3xl duration-200 hover:opacity-50">
            <Link onClick={() => setIsChecked(false)} href="#work">
              Prace
            </Link>
          </li>
          <li className="my-5 text-3xl duration-200 hover:opacity-50">
            <Link onClick={() => setIsChecked(false)} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
