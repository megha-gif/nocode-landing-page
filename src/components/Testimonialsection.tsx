import Image from "next/image";
import photo1 from "@/images/photo-1.png";
import photo2 from "@/images/photo-2.png";
import rating1 from "@/images/rating-1.png";
import rating2 from "@/images/rating-2.png";

const Testimonialsection = () => {
  return (
    <div
      id="testimonials"
      className="relative overflow-hidden min-h-screen mb-[0px] w-full bg-[linear-gradient(to_bottom,#000514_30%,#000A1F_100%)] pb-20"
    >
      {/* Wrapping Div */}
      <div className="container flex flex-col overflow-clip justify-center items-center mx-auto mt-5">
        <h1 className="text-[32px] md:text-[35px] p-2 md:p-0 font-bricolage bg-[linear-gradient(to_right,#84A3E0_30%,#1B4DAE_100%)] bg-clip-text text-transparent mt-12">
          Loved by Thousands of No-Code{" "}
          <span className=" md:block">Creators!</span>
        </h1>

        <p className="font-bricolage text-[20px] md:text-[22px] bg-[linear-gradient(to_right,#CFD7EF_30%,#3E68E2_100%)] bg-clip-text text-transparent text-center mt-2 mb-15">
          Free PlanSee what our users saying about our easy-to-use{" "}
          <span className="md:block">website builder.</span>
        </p>

        <div className="flex flex-col gap-[80px] md:flex-row md:justify-between md:gap-[120px] lg:gap-[460px]">
          <div className="flex flex-col items-center">
            <Image src={photo1} alt="client photo" className="w-[250px]" />
            <p className="font-bricolage text-[18px] bg-[linear-gradient(to_right,#1949D2_30%,#567CE6_100%)] bg-clip-text text-transparent text-center mt-5">
              Lisa, Blogger
            </p>
            <p className="font-bricolage text-[17px] bg-[linear-gradient(to_right,#1949D2_30%,#567CE6_100%)] bg-clip-text text-transparent ">
              Super Intuitive and fast! The drag-
              <span className="block">and-drop editor saved me hours.</span>
            </p>
            <Image src={rating1} alt="rating" className="w-[150px] mt-4" />
          </div>

          <div className="flex flex-col items-center">
            <Image src={photo2} alt="client photo" className="w-[250px]" />
            <p className="font-bricolage text-[18px] bg-[linear-gradient(to_right,#1949D2_30%,#567CE6_100%)] bg-clip-text text-transparent text-center mt-6">
              John Doe, Freelancer
            </p>
            <p className="font-bricolage text-[17px] bg-[linear-gradient(to_right,#1949D2_30%,#567CE6_100%)] bg-clip-text text-transparent ">
              I built my portfolio site in just
              <span className="block">30 minutues without coding!</span>
            </p>
            <span className="flex gap-1">
              <Image src={rating2} alt="rating" className="w-[30px] mt-4" />
              <Image src={rating2} alt="rating" className="w-[30px] mt-4" />
              <Image src={rating2} alt="rating" className="w-[30px] mt-4" />
              <Image src={rating2} alt="rating" className="w-[30px] mt-4" />
              <Image src={rating2} alt="rating" className="w-[30px] mt-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialsection;
