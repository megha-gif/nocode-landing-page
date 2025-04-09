"use client";
import Image from "next/image";
import nocode from "@/images/feature-icon-1.png";
import userinterface from "@/images/feature-icon-2.png";
import rocket from "@/images/feature-icon-3.png";
import { motion } from "framer-motion";

const features = [
  {
    title: "No Coding Required",
    subtitle:
      "Build your website or app without writing a single line of code. Drag, drop, and you're done!",
    icon: nocode,
  },
  {
    title: "User-Friendly Interface",
    subtitle:
      "Intuitive design that anyone can master. No technical skills required!",
    icon: userinterface,
  },
  {
    title: "One-Click Publish",
    subtitle:
      "Instantly publish your website with one click.No complex setup or hosting issues.",
    icon: rocket,
  },
];
const Featuresection = () => {
  // Features Section
  return (
    <div
      id="features"
      className="relative overflow-hidden min-h-screen mb-[0px] w-full bg-[linear-gradient(to_bottom,#000514_30%,#000A1F_100%)] pb-20"
    >
      {/* Wrapping Div */}
      <div className="container flex flex-col overflow-clip justify-center items-center mx-auto mt-13">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#FFFFFF] text-[33px] md:text-[45px] font-bricolage text-center font-thin"
        >
          AI-Powered Features
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4 max-w-9xl mx-auto mt-20 md:mt-38">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-[linear-gradient(to_bottom,#01081C_30%,#052582_100%)]  rounded-[20px] p-1 border-[#081e5a] border-[3px] ${
                index === 2
                  ? "md:mx-auto md:col-span-2 md:w-1/2 lg:col-span-1 lg:w-full"
                  : ""
              } hover:border-[#0d3090]`}
            >
              <p className="font-montserrat text-[28px] text-[#C6D3F5] text-center mt-12">
                {feature.title}
              </p>
              <p className="font-montserrat text-[14px] bg-[linear-gradient(to_right,#9CB7ED_30%,#A1C1FF_100%)] bg-clip-text text-transparent mt-5 px-13">
                {feature.subtitle}
              </p>
              <div className="flex justify-end">
                <Image
                  src={feature.icon}
                  alt="icon"
                  className="w-[80px] mt-2 md:w-[80px] lg:mt-5"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featuresection;
