import React, { useEffect, useState } from "react";
import Clubs from "../../assets/for-clubs.jpeg";
import Churches from "../../assets/for-churches.jpeg";
import Schools from "../../assets/for-schools.jpeg";

const WhatFundi = () => {
  const [small, setSmall] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 381) {
        setSmall(true); // Slow down on small devices
      } else {
        setSmall(false); // Default velocity for larger devices
      }
    };

    handleResize(); // Set the initial velocity based on the current window size
    window.addEventListener("resize", handleResize); // Add event listener for resizing

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="xl:px-[80px] px-6 pt-20" id="features">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-[30px] md:gap-[46px]">
        <div>
          <h2 className="text-[22px] md:text-[32px] leading-[1.4] text-[#1c1d24] font-axiforma font-normal">
            See what fundi can do for you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-4 md:gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="sm:block flex items-center sm:gap-0 gap-[20px] w-full overflow-hidden rounded-[20px] cursor-pointer sm:bg-transparent bg-white transition-all duration-300 sm:hover:bg-white transform sm:hover:-translate-y-4 group sm:p-0 p-[20px] sm:ps-0 ps-[10px"
            >
              {/* card thumbnail */}
              <div
                className={`sm:w-full ${
                  small
                    ? "min-w-[80px] w-[80px] min-h-[80px] h-[80px]"
                    : "min-w-[120px] w-[120px] min-h-[120px] h-[120px]"
                } sm:h-[200px] md:h-[285px] sm:rounded-none rounded-full`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full sm:rounded-none rounded-full object-cover"
                />
              </div>

              {/* card body */}
              <div className="sm:pr-4 sm:py-6 flex w-full sm:justify-start items-center justify-between gap-4 sm:group-hover:pl-4 transition-[padding-left] duration-300">
                <h3
                  className={`${
                    small ? "text-lg" : "text-xl"
                  } md:text-[22px] leading-[1.4] font-axiforma-r text-night-black`}
                >
                  {card.title}
                </h3>
                <span
                  className={`rounded-full sm:border-none border group-hover:border-red-500 transition-border duration-300 sm:w-fit sm:h-fit flex items-center justify-center sm:mt-[-3px] ${
                    small
                      ? "w-[37px] min-w-[37px] min-h-[37px] h-[37px]"
                      : "w-[50px] min-w-[50px] min-h-[50px] h-[50px]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={small ? "20" : "24"} // Conditional width
                    height={small ? "20" : "24"}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-colors duration-300 fill-[#1C1D24] group-hover:fill-red-500 my-auto"
                  >
                    <path d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"></path>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatFundi;
