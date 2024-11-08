import React, { useState, useEffect } from "react";
import heroVideo from "../../assets/hero-video.mp4";

const Hero = () => {
  const [visibleBubbleIndex, setVisibleBubbleIndex] = useState(0);

  const bubbles = ["Schools", "Clubs", "Churches", "WInning"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleBubbleIndex((prevIndex) =>
        prevIndex === bubbles.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-x-clip">
      <div className="relative mx-auto xxl:max-w-[1600px] max-w-[1520px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="homepage-hero-container mx-auto w-full px-[1.5rem] xl:px-[80px]">
            <div className="container__wrapper flex-col flex xl:gap-x-20 lg:gap-x-10 gap-x-20 lg:flex-row gap-y-[60px] sm:gap-y-[80px]">
              <div className="relative flex items-center z-index-10 lg:w-full max-w-[628px] sm:py-20">
                <div className="gap-y-6 flex flex-col lg:max-w-[520px] sm:max-w-[90%] xxl:max-w-full relative sm:py-0 py-5">
                  <h3 className="md:max-w-[485px] sm:text-[56px] text-[40px] font-axiformaa text-[#1c1d24] font-[400] mb-[1rem] sm:leading-[1.25] leading-[1.3]">
                    The platform for the new era of fundraising&nbsp;
                  </h3>
                  <p className="text-[#494951] text-[16px]">
                    Go beyond a simple upgrade. Scale your operations, maximize
                    your profit, and deliver remarkable guest experiences with
                    Mews: the cloud hospitality system that works for you.
                  </p>
                  <a
                    href="https://calendly.com/fundi-au/fundi-demo-call"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center gap-2 w-fit">
                      Book a demo
                    </button>
                  </a>
                </div>
              </div>

              <div className="xxl:w-full xl:w-[90%] flex items-center justify-end">
                <div className="relative flex items-center w-full h-full justify-start md:justify-end">
                  <div className="relative sm:h-[572px] h-[400px] w-[572px]">
                    <video
                      className="homepage-video relative z-0 rounded-[100px] h-full w-full object-cover overflow-hidden"
                      src={heroVideo}
                      preload=""
                      loop
                      autoPlay
                      muted
                      webkitPlaysinline
                      playsInline
                    ></video>

                    {bubbles.map((bubble, index) => (
                      <div
                        key={index}
                        className={`tag-bubble__container absolute transition ${
                          visibleBubbleIndex === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        style={{
                          top: `${index * 70 + 30}px`,
                          left: "-35px",
                          transition: "opacity 0.5s ease-in-out",
                        }}
                      >
                        <p className="tag-bubble text-[18px] rounded-full border-2 border-white bg-[#FFFFFFCC] py-1.5 px-4 w-fit relative z-10">
                          {bubble}
                        </p>
                        <div
                          className={`horizontal-line absolute h-[1px] bg-white ${
                            visibleBubbleIndex === index
                              ? "animate-horizontal"
                              : ""
                          }`}
                          style={{
                            width: "100px",
                            top: "50%",
                            left: "100%",
                            transform: "translateY(-50%)",
                          }}
                        ></div>
                        <div
                          className={`vertical-line absolute w-[1px] bg-white ${
                            visibleBubbleIndex === index
                              ? "animate-vertical"
                              : ""
                          }`}
                          style={{
                            height: "70px",
                            top: "50%",
                            left: "calc(100% + 100px)", // Ensures it starts where horizontal ends
                            transform: "translateY(-0.6%)",
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
