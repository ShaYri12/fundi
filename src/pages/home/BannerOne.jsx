import React from "react";
import Banner from "../../assets/experts.jpeg";

const BannerOne = () => {
  return (
    <section className="px-4 pt-[60px] pb-[60px] md:pb-[80px]">
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-20 pb-14 md:pb-20 pt-5 md:pt-20 rounded-[20px] md:rounded-[40px] bg-[#f8f5f2]">
        <div className="flex flex-col-reverse lg:flex-row gap-x-20 gap-y-[30px] md:items-center">
          <div className="w-full lg:w-[50%]">
            <h2 className="max-w-[520px] w-full mb-4 text-night-black font-axiforma-r text-[22px] md:text-[32px] leading-[1.4]">
              Built by fundraising leaders for fundraising leaders
            </h2>
            <p className="max-w-[420px] w-full text-[#494951] text-base inter-f font-normal">
              Fundi was built by experts who truly understand the challenges and
              intricacies of fundraising. Designed with real-world insights, it
              empowers fundraising leaders with the tools they need to engage
              supporters, streamline operations, and amplify results. Whether
              you're managing campaigns for a school, club, or church, fundi
              delivers a seamless, results-driven experience.
            </p>
          </div>

          <div className="w-full lg:w-[50%]">
            <div className="rounded-[16px] md:rounded-[24px] overflow-hidden max-h-[350px]">
              <img
                src={Banner}
                alt="Banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
