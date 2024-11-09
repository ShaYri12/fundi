import { useState, useRef, useEffect } from "react";
import { FaSchool, FaChurch, FaUsers } from "react-icons/fa";
import schools from "../../assets/schools.png";
import churches from "../../assets/churches.png";
import clubs from "../../assets/clubs.png";

export default function SimplifiesOperations() {
  const [activeTab, setActiveTab] = useState("schools");
  const scrollRef = useRef(null);

  const tabs = {
    schools: {
      title: "Schools",
      heading: "Fundi simplifies operations for ",
      description:
        "Gone are the days of chocolate fundraisers, colour runs, and school discos. Welcome to a new era of fundraising that harnesses technology to create seamless and impactful giving experiences. Our platform is the first of its kind, to offer flexible fundraising and enabling school supporters to round up their spare change for school fees, making contributions effortless and accessible.",
      images: [schools],
      icon: FaSchool,
    },
    clubs: {
      title: "Clubs",
      heading: "Fundi simplifies operations for ",
      description:
        "Transform your club's fundraising efforts with our platform, simplify operations and automate key processes, saving time and reducing costs. With features like real-time tracking, integrated payment processing, and seamless social media sharing, your club can focus on what truly matters: engaging with members and maximising fundraising potential.",
      images: [clubs],
      icon: FaUsers,
    },
    churches: {
      title: "Churches",
      heading: "Fundi simplifies operations for ",
      description:
        "Our platform revolutionises church fundraising by providing innovative, tech-driven solutions that engage congregations like never before. Say goodbye to traditional methods and embrace flexible giving options, including round-up donations that make it easy for members to contribute. With features designed to streamline operations and enhance community involvement, your church can focus on its mission.",
      images: [churches],
      icon: FaChurch,
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (scrollRef.current) {
      const tabIndex = Object.keys(tabs).indexOf(activeTab);
      const isLargeScreen = window.innerWidth >= 1024;

      if (isLargeScreen) {
        // Vertical scroll for large screens
        scrollRef.current.style.transform = `translateY(-${tabIndex * 420}px)`;
      } else {
        // Horizontal scroll for smaller screens
        scrollRef.current.style.transform = `translateX(-${tabIndex * 420}px)`;
      }
      scrollRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [activeTab]);

  return (
    <div
      className={`${
        activeTab === "clubs" ? "bg-[#222b28]" : "bg-[#172135]"
      } text-white rounded-[40px] lg:rounded-[80px]`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex lg:flex-row flex-col gap-12 justify-between">
          <div className="lg:w-6/12 xl:w-5/12 flex flex-col justify-center sm:gap-y-16 gap-y-[30px] px-6 lg:pr-12 lg:pl-20 py-[60px] md:pb-0 lg:pt-[120px] lg:pb-[140px]">
            <div className="flex flex-wrap gap-2">
              {Object.entries(tabs).map(([key, { title, icon: Icon }]) => (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                ${
                  activeTab === key
                    ? "bg-white/20 backdrop-blur-md text-white"
                    : "border border-white/30 hover:bg-white/15 text-gray-300"
                }`}
                >
                  <Icon className="w-4 h-4" />
                  {title}
                </button>
              ))}
            </div>
            <div className="space-y-8">
              <div className="space-y-4 transition-opacity duration-300">
                <h1 className="text-[32px] sm:text-[48px] font-[400] font-axiformaa sm:leading-[125%] leading-[1.4] mb-[1rem]">
                  {tabs[activeTab].heading}{" "}
                  <span
                    className={`${
                      activeTab === "clubs"
                        ? "text-[#77d9b3]"
                        : "text-[#b3b2fb]"
                    }`}
                  >
                    {tabs[activeTab].title}
                  </span>
                </h1>
                <p className="text-[#FFFFFFCC]">
                  {tabs[activeTab].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Images */}
          <div className="relative lg:max-w-[500px] max-w-full flex-grow md:flex hidden lg:h-auto h-[460px] overflow-hidden lg:pl-12 lg:pr-20 mt-2.5 md:mt-0 pb-[60px] lg:pb-[0px]">
            <div
              ref={scrollRef}
              className="lg:absolute relative inset-0 transition-transform duration-500 ease-in-out lg:top-[120px] top-0 lg:left-0 left-[26%] w-fit flex lg:flex-col flex-row"
              style={{
                height: `${Object.keys(tabs).length * 100}vh`, // Ensure total height for vertical scroll
                width: `${Object.keys(tabs).length * 100}vw`, // Ensure total width for horizontal scroll
              }}
            >
              {Object.entries(tabs).map(([key, { images }]) => (
                <div
                  key={key}
                  className={`flex items-center justify-center rounded-[60px] overflow-hidden lg:rounded-[60px] aspect-[195/175] sm:aspect-[464/416] object-cover lg:w-full max-w-[195px] sm:max-w-[420px] xl:max-w-[464px] h-full max-h-[175px] sm:max-h-[380px] xl:max-h-[416px] overflow-hidden
                  ${
                    activeTab === key
                      ? ""
                      : "opacity-40 scale-90 transition-[transform,opacity,scale] duration-300"
                  }`}
                >
                  <img
                    src={images[0]}
                    alt={`${key} feature`}
                    className="w-full h-full object-cover rounded-[60px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
