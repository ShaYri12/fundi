import React from "react";
import makeItRemarkable from "../../assets/make-it-remarkable.webp";

const MakeItRemarkable = () => {
  return (
    <div className="bg-[#F8F5F2]">
      <div className="bg-[#E6F5F0] flex items-center md:rounded-t-[40px] lg:rounded-t-[80px] py-[6rem]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-[1062px] mx-auto flex flex-col md:flex-row items-center md:gap-[4rem] lg:gap-[7rem]">
            <div className="w-full md:w-[50%] lg:w-1/2 sm:flex hidden">
              <div className="relative w-full overflow-hidden">
                <img
                  src={makeItRemarkable}
                  alt="Vintage hotel interior with chairs and tables"
                  className="image rounded-3xl lg:rounded-[40px] aspect-[464/416] object-cover lg:w-full h-full hidden md:flex lg:flex"
                />
              </div>
            </div>

            <div className="w-full md:w-[50%] lg:w-5/12 flex flex-col gap-[1.5rem]">
              <h1 className="text-[32px] sm:text-[48px] font-[400] font-axiformaa tracking-tight text-[#1c1d24] leading-[125%]">
                Make it <br className="md:flex hidden" /> remarkable.
              </h1>

              <p className="text-[#494951] max-w-lg">
                Ready to take the first step towards a more efficient, flexible,
                guest-centric approach to hospitality?
              </p>

              <button className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center gap-2 w-fit">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeItRemarkable;
