import linkedin from "@/images/social-1.png";
import twitter from "@/images/social-2.png";
import github from "@/images/social-3.png";
import Link from "next/link";
import Image from "next/image";

const Footersection = () => {
  return (
    <footer className="overflow-hidden bg-[linear-gradient(to_bottom,#000514_30%,#000A1F_100%)] text-white py-8 ">
      <div className="container mx-auto px-6 text-center">
        {/* Branding */}
        <div className="md:flex md:items-center md:gap-30  justify-between">
          <div className="md:text-left">
            <h1 className="text-[27px] font-tektur text-white font-light">
              NoCode
            </h1>
            <Link href="/Goback">
              <span className="bg-[linear-gradient(to_right,#1949D2_30%,#567CE6_100%)] bg-clip-text text-transparent text-[20px]">
                Get Started for FREE!
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="flex justify-center space-x-6 bg-[linear-gradient(to_right,#3E68E2_60%,#CFD7ED_100%)] bg-clip-text text-transparent">
              <Link href="#">
                <span className="hover:text-[#C0C0C0]">Home</span>
              </Link>
              <Link href="#features">
                <span className="hover:text-[#C0C0C0]">Features</span>
              </Link>
              <Link href="/Goback">
                <span className="hover:text-[#C0C0C0]">Get Started</span>
              </Link>
              <Link href="#testimonials">
                <span className="hover:text-white hidden md:block">
                  Testimonials
                </span>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="border-b-1 text-[#1542bd]  hidden md:block md:mt-5"></div>
        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <Link href="/" className="text-gray-400 hover:text-white">
            <Image src={linkedin} alt="Linkedin" width={35} height={35} />
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            <Image src={twitter} alt="Github" width={43} height={43} />
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            <Image src={github} alt="Twitter" width={35} height={35} />
          </Link>
        </div>
        {/* Copyright */}
        <div className="mt-6 text-gray-400 text-sm">
          &copy; 2025 AI Resume Builder | Made with ❤
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
