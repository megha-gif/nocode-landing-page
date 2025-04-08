import Link from "next/link";

const pricings = [
  {
    heading: "Free Plan",
    title: "$0/month",
    subtitle: [
      "Drag & Drop Builder",
      "1 Template",
      "Basic Support",
      "Limited Storage",
    ],
    btn: "Start for Free",
  },
  {
    heading: "Pro Plan",
    title: "$19/month",
    subtitle: [
      "Unlimited Templates",
      "Advanced Customization",
      "Priority Support",
      "5GB Storage",
    ],
    btn: "Upgrade Now",
  },
  {
    heading: "Enterprise Plan",
    title: "Custom Pricing",
    subtitle: [
      "Custom Templates",
      "Full API Access",
      "Dedicated Support",
      "50GB Storage",
    ],
    btn: "Contact Us",
  },
];

const Pricingsection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen mb-[0px] w-full bg-[linear-gradient(to_bottom,#000514_30%,#000A1F_100%)] pb-20">
      {/* Wrapping Div */}
      <div className="container flex flex-col overflow-clip justify-center items-center mx-auto mt-8">
        <h1 className="text-[35px] md:text-[43px] font-bricolage bg-[linear-gradient(to_right,#84A3E0_30%,#1B4DAE_100%)] bg-clip-text text-transparent ">
          Choose Your Plan
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 max-w-9xl mx-auto mt-20 md:mt-20">
          {pricings.map((pricing, index) => (
            <div key={index}>
              <p
                key={index}
                className="font-bricolage text-[38px] bg-[linear-gradient(to_right,#CFD7EF_30%,#3E68E2_100%)] bg-clip-text text-transparent text-center mt-0 mb-15"
              >
                {pricing.heading}
              </p>
              <div
                className={`rounded-[20px] h-[600px]  border-[#081e5a] border-[3px] flex flex-col items-center justify-center gap-20 hover:border-[#0d3090] ${
                  index === 1
                    ? "bg-[linear-gradient(to_bottom,#01081C_15%,#0d36a8_100%)] mt-0 lg:mt-[-30px]"
                    : "bg-[linear-gradient(to_bottom,#01081C_15%,#052582_100%)]"
                }  w-[340px]  `}
              >
                <p className="font-bricolage text-[38px]  bg-[linear-gradient(to_right,#FFFFFF_30%,#3E68E2_100%)] bg-clip-text text-transparent text-center mt-1">
                  {pricing.title}
                </p>
                <div key={index} className="flex flex-col gap-1">
                  {pricing.subtitle.map((sub, index) => (
                    <ul key={index} className="flex flex-col gap-1">
                      <li className="font-montserrat text-[15px] bg-[linear-gradient(to_right,#A1C1FF_30%,#B8CAFF_100%)] bg-clip-text text-transparent">
                        {sub}
                      </li>
                    </ul>
                  ))}
                </div>
                <Link href="#">
                  <button className="bg-[linear-gradient(to_bottom,#1949D2_15%,#0D256C_100%)] font-bricolage font-thin px-5 p-2 rounded-[12px] text-[#FFFFFF] text-[17px] hover:scale-105 hover:bg-[linear-gradient(to_bottom,#0c45e0_15%,#092065_100%)] ">{`"${pricing.btn}"`}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricingsection;
