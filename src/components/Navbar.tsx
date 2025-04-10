"use client";
import Link from "next/link";
import { useState } from "react";
import menuicon from "@/images/menu.png";
import menuclose from "@/images/menu-close.png";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenuValue] = useState(false);
  const closeMenu = () => setMenuValue(false);

  return (
    // Navbar
    <nav className=" relative backdrop-blur-lg top-0 left-0 z-50 w-full bg-[linear-gradient(to_bottom,rgba(0,10,31,0.08)_30%,rgba(5,48,132,0.08)_100%)]">
      {/* Wrapping Div */}
      <div className="max-w-7xl flex items-center justify-between px-3 py-6 mx-auto text-white">
        <h1 className="text-[27px] font-tektur text-white font-light">
          NoCode
        </h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-7 text-[19px]">
          <ul className="flex space-x-5 font-montserrat">
            <Link href="#features">
              <span className="hover:text-[#CCCCCC]">Features</span>
            </Link>
            <Link href="#testimonials">
              <span className="hover:text-[#CCCCCC]">Testimonials</span>
            </Link>
            <Link href="#pricing">
              <span className="hover:text-[#CCCCCC]">Pricing</span>
            </Link>
          </ul>
        </div>
        <Link
          href="/Goback
        "
        >
          <button className="hidden md:block font-montserrat text-[18px] pt-1 rounded-[6px] px-5 py-1 bg-[#007ACC] hover:bg-[#007acce7] font-light">
            Get Started
          </button>
        </Link>

        {/* Hamburger Mobile Menu Btn*/}
        <button
          onClick={() => {
            setMenuValue(!menu);
          }}
          className="focus:outline-none md:hidden"
        >
          {menu ? (
            <Image src={menuclose} alt="Menu Close" width={40} height={40} />
          ) : (
            <Image src={menuicon} alt="Menu" width={40} height={40} />
          )}
        </button>
        {/* Mobile Menu */}
        {menu && (
          <div className="bg-[linear-gradient(to_bottom,#000514_30%,#000A1F_100%)] pt-5 pb-15 font-inder top-full absolute md:hidden left-0 flex flex-col items-center justify-center w-full mx-auto space-y-5 z-[100px]">
            <Link href="#features">
              <button
                onClick={closeMenu}
                className="text-[19px] text-white p-5 px-[120px] bg-[#007ACC] rounded-[2px] hover:scale-105 font-montserrat"
              >
                Features
              </button>
            </Link>
            <Link href="#testimonials">
              <button
                onClick={closeMenu}
                className="text-[19px] text-white p-5 px-[103px] bg-[#007ACC] rounded-[2px] hover:scale-105 font-montserrat"
              >
                Testimonials
              </button>
            </Link>
            <Link href="#pricing">
              <button
                onClick={closeMenu}
                className="text-[19px] text-white p-5 px-[130px] bg-[#007ACC] rounded-[2px] hover:scale-105 font-montserrat"
              >
                Pricing
              </button>
            </Link>
            <Link href="/Goback">
              <button
                onClick={closeMenu}
                className="text-[19px] text-white px[100px] bg-[#007ACC] rounded-[2px] hover:scale-105 font-montserrat"
              >
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
