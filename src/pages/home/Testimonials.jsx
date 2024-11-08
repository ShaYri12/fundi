import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import { Autoplay, Grid } from "swiper/modules";
import Image1 from "../../assets/TESTIMONIALS/1.png";
import Image2 from "../../assets/TESTIMONIALS/2.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      image: Image1,
      title: "John Doe",
      description: "Fundi has been transformative for our organization.",
    },
    {
      image: Image2,
      title: "Jane Smith",
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image1,
      title: "John Doe",
      description: "Fundi has been transformative for our organization.",
    },
    {
      image: Image2,
      title: "Jane Smith",
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image1,
      title: "John Doe",
      description: "Fundi has been transformative for our organization.",
    },
    {
      image: Image2,
      title: "Jane Smith",
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image1,
      title: "John Doe",
      description: "Fundi has been transformative for our organization.",
    },
    {
      image: Image2,
      title: "Jane Smith",
      description: "The best platform to manage our operations seamlessly.",
    },
  ];

  return (
    <section className="relative flex flex-col mx-auto pt-[60px] md:pt-[100px] pb-[30px] md:pb-[80px] rounded-t-[40px] lg:rounded-t-[80px] bg-[#f8f5f2]">
      <div className="md:max-w-[700px] max-w-[639px] mx-auto mx:px-0 px-[1.5rem] md:text-center text-left w-full flex flex-col mb-8 md:mb-[60px] gap-3 sm:gap-6">
        <h3 className="md:text-[40px] text-[32px] md:leading-[1.5] text-night-black font-axiforma-r">
          The best organisations run on fundi
        </h3>
        <p className="inter-f text-base text-[#494951]">
          Hear what our partners say about the power of fundi
        </p>
      </div>

      {/* Conditionally render Swiper or latest testimonials based on screen width */}
      <div className="block md:hidden px-4">
        <div className="flex flex-col gap-6 max-w-[600px] mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="flex text-left p-6 bg-white rounded-[1rem] shadow-md"
            >
              <div className="flex flex-col items-start gap-[10px]">
                <h4 className="font-[500] text-[#1C1D24] font-axiformaa">
                  "{testimonial.description}"
                </h4>
                <div className="flex gap-[1rem] items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="h-39 md:h-[100px] w-9 md:w-[100px] rounded-full object-cover"
                  />
                  <p className="text-sm text-[#494951]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper slider for larger screens */}
      <div className="hidden md:block w-full max-w-[1440px] px-4">
        <Swiper
          modules={[Autoplay, Grid]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          grid={{ rows: 2, fill: "row" }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 2 },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex text-left p-6 bg-white rounded-2xl shadow-md"
            >
              <div className="flex gap-[1rem] items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="h-39 md:h-[100px] w-9 md:w-[100px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-between gap-4">
                  <h4 className="font-[500] text-[#1C1D24] font-axiformaa">
                    "{testimonial.description}"
                  </h4>
                  <p className="text-sm text-[#494951]">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
