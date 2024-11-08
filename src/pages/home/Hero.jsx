import React, { useState, useEffect, useRef } from "react";
import heroVideo from "../../assets/hero-video.mp4";

const Hero = () => {
  const [visibleBubbleIndex, setVisibleBubbleIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const bubbles = [
    "Church fundraising",
    "Club fundraising",
    "School fundraising",
    "Seamless integration",
    "Lasting community impact",
    "Real time support",
    "Live supporter analytics",
    "Integrated volunteer portal & silent auctions",
  ];
  const bubbleDurations = [2500, 2600, 2800, 2500, 3000, 2500, 2600, 3400]; // Durations for each bubble in milliseconds

  useEffect(() => {
    let timeoutId;

    const showNextBubble = () => {
      if (isVideoPlaying) {
        const nextIndex =
          visibleBubbleIndex === bubbles.length - 1
            ? 0
            : visibleBubbleIndex + 1;

        setVisibleBubbleIndex(nextIndex);
        // Set timeout for the next bubble's display duration
        timeoutId = setTimeout(showNextBubble, bubbleDurations[nextIndex]);
      }
    };

    // Start showing bubbles when video starts playing
    if (isVideoPlaying) {
      timeoutId = setTimeout(
        showNextBubble,
        bubbleDurations[visibleBubbleIndex]
      );
    }

    return () => clearTimeout(timeoutId);
  }, [visibleBubbleIndex, isVideoPlaying]);

  useEffect(() => {
    const handleVideoPlay = () => {
      setIsVideoPlaying(true);
    };

    const handleVideoEnd = () => {
      // Reset bubble index when the video ends and loops
      setVisibleBubbleIndex(0);
      setIsVideoPlaying(false); // Stop the animation and restart
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handleVideoPlay);
      videoElement.addEventListener("ended", handleVideoEnd); // Listen for video end event
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handleVideoPlay);
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

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

              <div className="xxl:w-full xl:w-[90%] lg:pe-0 pe-[40px] flex items-center justify-end">
                <div className="relative flex items-center w-full h-full justify-start md:justify-end">
                  <div className="relative sm:h-[572px] h-[400px] w-[572px]">
                    <video
                      ref={videoRef}
                      className="homepage-video relative z-0 rounded-[100px] h-full w-full object-cover overflow-hidden"
                      src={heroVideo}
                      preload=""
                      loop
                      autoPlay
                      muted
                      webkitPlaysinline="true"
                      playsInline
                    ></video>

                    {isVideoPlaying &&
                      bubbles.map((bubble, index) => (
                        <div
                          key={index}
                          className={`tag-bubble__container absolute transition ${
                            visibleBubbleIndex === index
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                          style={{
                            top: index % 2 === 0 ? `${70 + 30}px` : "auto", // Position for odd index
                            bottom: index % 2 !== 0 ? `${70 + 30}px` : "auto", // Position for even index
                            left: "-40px",
                            transition: "opacity 0.4s ease-in-out",
                          }}
                        >
                          <p className="tag-bubble text-[18px] rounded-full border-2 border-white bg-[#FFFFFFCC] py-1.5 px-4 w-fit relative z-10">
                            {bubble}
                          </p>
                          <div
                            className={`${
                              index % 2 === 0
                                ? "horizontal-line"
                                : "horizontal-line2"
                            } absolute bg-white ${
                              visibleBubbleIndex === index
                                ? index % 2 === 0
                                  ? "animate-horizontal"
                                  : "animate-horizontal2"
                                : ""
                            }`}
                          ></div>

                          <div
                            className={`${
                              index % 2 === 0
                                ? "vertical-line"
                                : "vertical-line2"
                            } absolute bg-white ${
                              visibleBubbleIndex === index
                                ? index % 2 === 0
                                  ? "animate-vertical"
                                  : "animate-vertical2"
                                : ""
                            }`}
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
