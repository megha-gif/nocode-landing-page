"use client";
import Image from "next/image";
import Link from "next/link";
import Herodesign from "@/images/hero-design.png";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <>
      {/* Hero section */}
      <div className="bg-[linear-gradient(to_bottom,#000514_30%,#000A1F_100%)] relative overflow-hidden min-h-screen w-full">
        {/* NavBar */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Navbar />
        </motion.div>

        {/* Wrapping Div */}
        <div className="container text-white flex  overflow-clip  justify-center items-center mx-auto lg:pb-70">
          <div className="flex mt-1 m bvfd:mt-25 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Hero Image */}
              <Image
                src={Herodesign}
                alt="Hero Image"
                width={295}
                height={295}
                className="mt-35 absolute md:h-[600px] md:w-[550px] lg:h-[600px] lg:w-[580px] lg:mt-10"
              />
            </motion.div>

            {/* Content of Hero Section */}
            <div className="flex flex-col mt-35 ml-[200px] relative md:ml-[400px] md:mt-45 lg:mt-30 lg:ml-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-3xl text-white text-left font-bricolage font-thin md:text-[58px]">
                  <h1>Build Your</h1>
                  <h1>Website </h1>
                  <h1>
                    Without <span className="hidden lg:inline-block">Code</span>
                  </h1>
                  <h1 className="lg:hidden">Code</h1>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link href="/Goback">
                  <button className="bg-[#007ACC] p-1 px-2 text-[18px] md:p-1.5 md:px-4 md:rounded-[8px] md:mt-10 md:ml-10 md:text-[25px] rounded-[5px] font-montserrat mt-5 ml-5 font-light hover:bg-[#0689cb]">
                    Get Started{" "}
                    <span className="hidden md:inline-block">For Free</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
