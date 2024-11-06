import React, { useState, useEffect } from "react";
import heroVideo from "../../assets/hero-video.mp4";

const Hero = () => {
  const [visibleBubbles, setVisibleBubbles] = useState([]);

  useEffect(() => {
    const bubbleIndexes = Array.from({ length: 8 }, (_, i) => i);

    const showRandomBubble = () => {
      setVisibleBubbles((prevVisibleBubbles) => {
        const remainingBubbles = bubbleIndexes.filter(
          (index) => !prevVisibleBubbles.includes(index)
        );
        if (remainingBubbles.length === 0) return prevVisibleBubbles;

        const randomIndex = Math.floor(Math.random() * remainingBubbles.length);
        return [...prevVisibleBubbles, remainingBubbles[randomIndex]];
      });
    };

    const intervalId = setInterval(showRandomBubble, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const bubbles = [
    "Hotels",
    "Wellness space",
    "Long stays",
    "Co-working",
    "Glamping",
    "Hostels",
    "Events",
    "Parking",
  ];

  return (
    <div className="relative overflow-x-clip">
      <div className="relative mx-auto xxl:max-w-[1600px] max-w-[1520px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="homepage-hero-container mx-auto w-full px-[1.5rem] xl:px-[80px]">
            <div className="container__wrapper flex-col flex xl:gap-x-20 lg:gap-x-10 gap-x-20 lg:flex-row gap-y-[60px] sm:gap-y-[80px]">
              <div className="relative flex items-center z-index-10 lg:w-full max-w-[628px] sm:py-20">
                <div className="homepage-hero__lozenge sm:block hidden"></div>
                <div className="gap-y-6 flex flex-col lg:max-w-[520px] sm:max-w-[90%] xxl:max-w-full relative sm:py-0  py-5">
                  <div className="text-content cms-content">
                    <h3 className="md:max-w-[485px] sm:text-[56px] text-[40px] font-axiformaa text-[#1c1d24] font-[400] mb-[1rem] sm:leading-[1.25] leading-[1.3]">
                      The platform for the new era of fundraising&nbsp;
                    </h3>
                    <div className="md:max-w-[530px] lg:max-w-[430px] sm:max-w-[90%]">
                      <p className="text-[#494951] text-[16px]">
                        Go beyond a simple upgrade. Scale your operations,
                        maximize your profit, and deliver remarkable guest
                        experiences with Mews: the cloud hospitality system that
                        works for you.
                      </p>
                    </div>
                  </div>
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
                  <div className="w-fit relative sm:h-[572px] h-[400px]">
                    <video
                      className="homepage-video relative z-1 rounded-[100px] h-full w-[572px] object-cover overflow-hidden"
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
                        className={`tag-bubble__container ${
                          visibleBubbles.includes(index) ? "bubble-visible" : ""
                        }`}
                        key={index}
                      >
                        <div
                          className="vertical-line"
                          style={{ opacity: "0", transform: "scale(0)" }}
                        ></div>
                        <div
                          className="horizontal-line"
                          style={{ opacity: "0", transform: "scale(0)" }}
                        ></div>
                        <div
                          className="point"
                          style={{ opacity: "0", transform: "scale(0)" }}
                        ></div>
                        <p className="tag-bubble text-[18px] rounded-[33px] border-2 border-white bg-white-800 py-1.5 px-4 w-fit opacity-0">
                          {bubble}
                        </p>
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
