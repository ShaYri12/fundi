import React, { useState, useRef, useEffect } from "react";
import Marquee from "react-marquee-slider";
import { v4 as uuidv4 } from "uuid";
import Image1 from "../../assets/TESTIMONIALS/1.png";
import Image2 from "../../assets/TESTIMONIALS/2.jpeg";
import Image3 from "../../assets/TESTIMONIALS/3.jpg";
import Image4 from "../../assets/TESTIMONIALS/4.png";
import Image5 from "../../assets/TESTIMONIALS/5.png";
import Image6 from "../../assets/TESTIMONIALS/6.png";
import Image7 from "../../assets/TESTIMONIALS/7.png";
import Image8 from "../../assets/TESTIMONIALS/8.webp";
import Image9 from "../../assets/TESTIMONIALS/9.png";
import Image10 from "../../assets/TESTIMONIALS/10.png";
import Image11 from "../../assets/TESTIMONIALS/11.jpeg";
import Image12 from "../../assets/TESTIMONIALS/12.jpeg";
import Image13 from "../../assets/TESTIMONIALS/13.png";
import Image14 from "../../assets/TESTIMONIALS/14.jpeg";
import Image15 from "../../assets/TESTIMONIALS/15.jpeg";
import Image16 from "../../assets/TESTIMONIALS/16.png";
import Image17 from "../../assets/TESTIMONIALS/17.jpeg";
import Image18 from "../../assets/TESTIMONIALS/18.png";

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const testimonials = [
    {
      image: Image1,
      title: [
        "Sarah Thompson,",
        "Club President,",
        "Riverside Sports Club, Brisbane.",
      ],
      description: "Fundi has been transformative for our organisation.",
    },
    {
      image: Image2,
      title: [
        "David Johnson,",
        "Principal,",
        "St Augustine High School, Sydney.",
      ],
      description: "The best platform to manage our operations seamlessly.",
    },
    {
      image: Image3,
      title: ["Eric Carter", "Pastor", "Grace Community Church, Melbourne"],
      description: "Thanks to Fundi, we've engaged more than ever.",
    },
    {
      image: Image4,
      title: ["James Lee", "Executive Director", "Unity Church, Perth"],
      description: "We have just started with fundi, so far so good.",
    },
    {
      image: Image5,
      title: [
        "Jessica Brown",
        "Fundraising Coordinator",
        "The Sunshine Club, Adelaide",
      ],
      description:
        "We love how Fundi allows our supporters to give in ways that fit their lifestyles, boosting our fundraising efforts.",
    },
    {
      image: Image6,
      title: ["Tom Nguyen", "PTA President", "Oakwood Elementary, Canberra"],
      description:
        "The real-time tracking feature has been invaluable for our school, helping us monitor our fundraising goals and keep everyone engaged.",
    },
    {
      image: Image7,
      title: ["Rachel Green", "Youth Minister", "New Hope Church, Hobart"],
      description:
        "The platform mates fundraising so seamless. It's a game-changer.",
    },
    {
      image: Image8,
      title: [
        "Michael Adams",
        "Head of Fundraising",
        "Hillview Community Centre, Gold Coast",
      ],
      description:
        "We've replaced traditional fundraisers with Fundi, and the results speak for themselves.",
    },
    {
      image: Image9,
      title: ["Laura White", "Principal", "Greenfield Academy, Newcastle"],
      description: "We're happy with Fundi.",
    },
    {
      image: Image10,
      title: ["Paul Wilson", "Senior Pastor", "Faith Baptist Church, Brisbane"],
      description:
        "Fundi has allowed us to engage our congregation in new ways, we will see how the results progress.",
    },
    {
      image: Image11,
      title: ["Karen Smith", "Fundraising Chair", "Heritage Club, Sydney"],
      description:
        "We just tested the live silent auction, very impressed. Well done fundi team!",
    },
    {
      image: Image12,
      title: [
        "Emily Roberts",
        "Development Director",
        "Crestview School, Melbourne",
      ],
      description:
        "We've seen a remarkable increase in recurring donations since implementing Fundi. It's transformed our fundraising model.",
    },
    {
      image: Image13,
      title: [
        "Mark Thompson",
        "Community Outreach Director",
        "St. Andrew's Church, Perth",
      ],
      description:
        "Fundi's innovative features have empowered our church to reach more people and raise more.",
    },
    {
      image: Image14,
      title: [
        "Jessica Lee",
        "Events Coordinator",
        "Harmony Sports Club, Adelaide",
      ],
      description:
        "The platform's ability to connect supporters and streamline donations has made our events more successful than ever.",
    },
    {
      image: Image15,
      title: [
        "Anna Miller",
        "Executive Director",
        "Bright Futures Academy, Canberra",
      ],
      description:
        "With Fundi, we can now focus on building relationships with our supporters rather than worrying about fundraising logistics.",
    },
    {
      image: Image16,
      title: ["Richard Davis", "Pastor", "Living Waters Church, Hobart"],
      description:
        "Our church's giving culture has flourished since adopting Fundi.",
    },
    {
      image: Image17,
      title: [
        "Sarah Clark",
        "Fundraising Manager",
        "Evergreen High School, Gold Coast",
      ],
      description: "We just started, very easy to use.",
    },
    {
      image: Image18,
      title: [
        "Kevin White",
        "Club Treasurer",
        "Valley View Community Centre, Newcastle",
      ],
      description: "Fundi has taken our fundraising strategy to new heights.",
    },
  ];

  const halfLength = Math.ceil(testimonials.length / 2);
  const firstHalf = testimonials.slice(0, halfLength);
  const secondHalf = testimonials.slice(halfLength);

  // Function to handle mouse out
  const handleMouseOut = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsHovered(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleMouseOut);
    return () => {
      document.removeEventListener("mousedown", handleMouseOut);
    };
  }, []);

  return (
    <section className="relative flex flex-col mx-auto pt-[60px] md:pt-[100px] pb-[30px] md:pb-[80px] rounded-t-[40px] lg:rounded-t-[80px] bg-[#f8f5f2]">
      <div className="md:max-w-[750px] max-w-[639px] mx-auto mx:px-0 px-[1.5rem] md:text-center text-left w-full flex flex-col mb-8 md:mb-[60px] gap-3 sm:gap-6">
        <h3 className="md:text-[40px] text-[32px] md:leading-[1.5] text-night-black font-axiforma-r">
          The best organisations run on fundi
        </h3>
        <p className="inter-f text-base text-[#494951]">
          Hear what our partners say about the power of fundi.
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
                    className="min-h-[36px] h-[36px] md:h-[100px] md:min-w-[80px] w-[36px] md:w-[100px] rounded-full object-cover"
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
        ref={divRef} // Reference to the div
        className="hidden md:block w-full md:px-0 px-4"
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
                  className="h-39 md:h-[80px] md:min-w-[80px] min-w-[80px] w-9 md:w-[80px] rounded-full object-cover"
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
                  className="h-39 md:h-[80px] md:min-w-[80px] min-w-[80px] w-9 md:w-[80px] rounded-full object-cover"
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
