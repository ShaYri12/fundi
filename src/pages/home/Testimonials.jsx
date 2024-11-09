import React, { useState } from "react";
import Marquee from "react-marquee-slider";
import { v4 as uuidv4 } from "uuid";
import Image1 from "../../assets/TESTIMONIALS/1.png";
import Image2 from "../../assets/TESTIMONIALS/2.jpeg";

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      image: Image1,
      title: [
        "Sarah Thompson, ",
        "Club President, ",
        "Riverside Sports Club, Brisbane.",
      ],
      description: "Fundi has been transformative for our organization.",
    },
    {
      image: Image2,
      title: [
        "David Johnson, ",
        "Principal, ",
        "St Augustine High School, Sydney.",
      ],
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image1,
      title: [
        "Sarah Thompson, ",
        "Club President, ",
        "Riverside Sports Club, Brisbane.",
      ],
      description: "Fundi has been transformative for our organization.",
    },
    {
      image: Image2,
      title: [
        "David Johnson, ",
        "Principal, ",
        "St Augustine High School, Sydney.",
      ],
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image2,
      title: [
        "David Johnson, ",
        "Principal, ",
        "St Augustine High School, Sydney.",
      ],
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image1,
      title: [
        "Sarah Thompson, ",
        "Club President, ",
        "Riverside Sports Club, Brisbane.",
      ],
      description: "Fundi has been transformative for our organization.",
    },
    {
      image: Image2,
      title: [
        "David Johnson, ",
        "Principal, ",
        "St Augustine High School, Sydney.",
      ],
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image1,
      title: [
        "Sarah Thompson, ",
        "Club President, ",
        "Riverside Sports Club, Brisbane.",
      ],
      description: "Fundi has been transformative for our organization.",
    },
  ];

  const halfLength = Math.ceil(testimonials.length / 2);
  const firstHalf = testimonials.slice(0, halfLength);
  const secondHalf = testimonials.slice(halfLength);

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
      <div className="block md:hidden md:px-4">
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
                  <p className="text-sm text-[#494951]">
                    {testimonial.title.map((line, idx) => (
                      <p key={idx}>{line}</p> // Render each title on a new line
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="hidden md:block w-full  md:px-0 px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First Row of Marquee - First Half of Testimonials */}
        <Marquee
          velocity={isHovered ? 0 : 20} // Stop the marquee when hovered
          minScale={0.7}
          resetAfterTries={200}
          direction="rtl"
        >
          {firstHalf.map((testimonial) => (
            <div
              key={uuidv4()}
              className="flex text-left p-6 bg-white md:bg-white/50 rounded-2xl me-[20px] my-[13px] w-[400px]"
            >
              <div className="flex gap-[1rem] items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="h-39 md:h-[80px] w-9 md:w-[80px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-between gap-4">
                  <h4 className="font-[500] text-[#1C1D24] font-axiformaa">
                    "{testimonial.description}"
                  </h4>
                  <p className="text-sm text-[#494951]">
                    {testimonial.title.map((line, idx) => (
                      <p key={idx}>{line}</p> // Render each title on a new line
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Second Row of Marquee - Second Half of Testimonials */}
        <Marquee
          velocity={isHovered ? 0 : 20} // Stop the marquee when hovered
          minScale={0.7}
          resetAfterTries={200}
          direction="rtl"
        >
          {secondHalf.map((testimonial) => (
            <div
              key={uuidv4()}
              className="flex text-left p-6 bg-white md:bg-white/50 rounded-2xl me-[20px] my-[10px] w-[400px]"
            >
              <div className="flex gap-[1rem] items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="h-39 md:h-[80px] w-9 md:w-[80px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-between gap-4">
                  <h4 className="font-[500] text-[#1C1D24] font-axiformaa">
                    "{testimonial.description}"
                  </h4>
                  <p className="text-sm text-[#494951]">
                    {testimonial.title.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
