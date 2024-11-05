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
      <div className="max-w-[700px] text-center w-full mx-auto flex flex-col mb-8 md:mb-[60px] gap-4 sm:gap-6 ">
        <h3 className="text-[40px] leading-[1.5] text-night-black font-axiforma-r">
          The best organisations run on fundi
        </h3>
        <p className="inter-f text-base text-[#494951]">
          Hear what our partners say about the power of fundi
        </p>
      </div>

      {/* Testimonials Section */}
      <Swiper
        modules={[Autoplay, Grid]}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Smooth autoplay every 2 seconds
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={30}
        loop={true} // Enable looping
        breakpoints={{
          640: {
            slidesPerView: 1,
            grid: { rows: 2 },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2 },
          },
        }}
        className="w-full max-w-[1440px] px-4"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <img
              src={testimonial.image}
              alt={testimonial.title}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold text-night-black">
              {testimonial.title}
            </h4>
            <p className="text-sm text-[#494951]">{testimonial.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
