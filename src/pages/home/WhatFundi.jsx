import React from "react";
import Clubs from "../../assets/for-clubs.png";
import Churches from "../../assets/for-churches.png";
import Schools from "../../assets/for-schools.png";

const WhatFundi = () => {
  const cardData = [
    {
      title: "For Clubs",
      image: Clubs,
    },
    {
      title: "For Churches",
      image: Churches,
    },
    {
      title: "For Schools",
      image: Schools,
    },
  ];

  return (
    <section className="px-4 pt-20">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-[30px] md:gap-[46px]">
        <div>
          <h2 className="text-[22px] md:text-[32px] leading-[1.4] text-[#1c1d24] font-axiforma font-normal">
            See what fundi can do for you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-[20px] cursor-pointer bg-transparent transition-all duration-300 hover:bg-white transform hover:-translate-y-4 group"
            >
              {/* card thumbnail */}
              <div className="w-full h-[200px] md:h-[285px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* card body */}
              <div className="pr-4 py-6 flex gap-4 group-hover:pl-4 transition-[padding-left] duration-300">
                <h3 className="text-xl md:text-[22px] leading-[1.4] font-axiforma-r text-night-black">
                  {card.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-colors duration-300 fill-[#1C1D24] group-hover:fill-red-500"
                >
                  <path d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatFundi;
