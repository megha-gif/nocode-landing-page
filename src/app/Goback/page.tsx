"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Goback = () => {
  const router = useRouter();
  return (
    // Goback Page
      <div id="goback" className="relative overflow-hidden min-h-screen mb-[0px] w-full bg-[linear-gradient(to_bottom,#000514_30%,#000A1F_100%)] pb-20">
      {/* Wrapping Div */}
      <div className="container flex flex-col overflow-clip justify-center items-center mx-auto mt-8">
        {/* Content */}
        <h1 className="text-[32px] md:text-[35px] p-2 md:p-0 font-bricolage bg-[linear-gradient(to_right,#84A3E0_30%,#1B4DAE_100%)] bg-clip-text text-transparent mt-12">
          Get Started
        </h1>
        <p className="font-bricolage text-[20px] md:text-[22px] bg-[linear-gradient(to_right,#CFD7EF_30%,#3E68E2_100%)] bg-clip-text text-transparent text-center mt-2 mb-15">
          Welcome!This is the start of the journey.Contact us or explore more.
        </p>
        <Link href="/">
          <button
            onClick={() => router.back()}
            className="bg-[linear-gradient(to_bottom,#1949D2_15%,#0D256C_100%)] font-bricolage font-thin px-5 p-2 rounded-[12px] text-[#FFFFFF] text-[17px] hover:scale-105 hover:bg-[linear-gradient(to_bottom,#0c45e0_15%,#092065_100%)] "
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Goback;
