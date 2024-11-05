import React from "react";
import { BsArrowRight } from "react-icons/bs";
import LearnMoreSlider from "../../components/LearnMoreSlider";
import { resources } from "../../assets/resourcesData";

const LearnMore = () => {
  return (
    <section className="lg:px-[80px] bg-[#F8F5F2] md:pt-[80px] pt-[30px] pb-[60px] md:pb-[100px] px-4">
      <div className="container mx-auto">
        <div className="lg:text-center text-left mb-[30px] sm:mb-[3.5rem]">
          <h2 className="text-[32px] sm:text-[48px] font-axiformaa text-[#1c1d24] font-[400] mb-[1rem]">
            Learn more with Mews
          </h2>
          <p className="text-[16px] text-[#494951] max-w-[420px] lg:max-w-[680px] lg:mx-auto">
            Our latest insights, guides and reports to help you solve your
            business challenges.
          </p>
        </div>

        <div className="sm:flex hidden">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-[2.25rem] gap-x-[2rem] w-full">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[226px]">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-[16px] py-[24px]">
                  <h3 className="text-[18px] font-[400] font-axiformaa text-[#1c1d24] mb-[1rem]">
                    {resource.title}
                  </h3>
                  <p className="text-[#494951] text-[14px] mb-[0.75rem]">
                    {resource.description}
                  </p>
                  <a
                    href={resource.href}
                    className="inline-flex items-center text-[#ff5a65] hover:text-rose-600 font-medium border-b border-b-[#ff5a65] pb-[3px] text-[14px]"
                  >
                    Read more
                    <BsArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LearnMoreSlider />
      </div>
    </section>
  );
};

export default LearnMore;
