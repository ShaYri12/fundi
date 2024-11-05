import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { resources } from "../assets/resourcesData";

const LearnMoreSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="relative w-full max-w-lg mx-auto sm:hidden block">
      {/* Slide counter at the top-right corner */}
      <div className="flex items-center justify-end mb-[16px]">
        <p className="w-fit font-[500] leading-5 sm:hidden inline-block lg:hidden text-base text-[#494951] py-1 px-4 rounded-[30px] border border-[#494951] flex gap-[-6px]">
          <span>{currentSlide}</span> / <span>{resources.length}</span>
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Custom pagination element
          bulletClass: "swiper-pagination-bullet",
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
      >
        {resources.map((resource, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-[16px] overflow-hidden">
              <div className="relative h-[226px]">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-[16px] py-[24px]">
                <h3 className="text-[18px] font-[300] font-axiformaa text-[#1c1d24] mb-[1rem]">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination below the card */}
      <div className="custom-pagination mt-4"></div>

      {/* Custom styles for pagination */}
      <style jsx>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          position: relative;
          bottom: -14px; /* Adjust to place outside card */
        }
        .swiper-pagination-bullet {
          background-color: #1c1d2480;
          opacity: 0.5;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background-color: #1c1d24;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default LearnMoreSlider;
