import { useRef, useState, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const Hospitality = () => {
  const sections = [
    {
      heading: "Empower your journey, amplify your mission.",
      description: [
        " No contracts, full flexibility.",
        " Zero fees for hosting, websites, or dashboards.",
        " 100% of donations go directly to your organisation.",
        " Supporters cover all processing fees, ensuring no cost to you.",
        " Full transparency with real-time reporting.",
      ],
      image: "/alll.png",
    },
    {
      heading: "Flexible giving options",
      description:
        "Empower your supporters with multiple ways to give, including round-ups, weekly subscriptions, or one-time donations. Plus, they can now use round-up donations to cover school fees, offering even more value to families.",
      image: "/22.png",
    },
    {
      heading: "Real-time volunteer vetting",
      description:
        "Australia's first real-time volunteer vetting system provides instant checks on police history, criminal records, and working with children checks, ensuring safer, more efficient volunteer management.",
      image: "/33.png",
    },
    {
      heading: "Automated silent auctions",
      description:
        "Run unlimited silent auctions with automated bidding updates and self-checkout. Our system streamlines the entire process, allowing you to focus on engaging your supporters and maximising contributions.",
      image: "/44.png",
    },
    {
      heading: "Custom supporter dashboard",
      description:
        "Your own supporter-branded and analytic dashboard in minutes! Track campaign progress, monitor engagement, and gain insights—all from an intuitive interface designed to elevate your fundraising.",
      image: "/11.png",
    },
  ];

  const sectionRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    let newActiveIndex = activeIndex;

    sectionRef.current.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const distanceToCenter = Math.abs(sectionCenter - windowHeight / 2) + 10;

      // Check if the next section comes into the middle of the screen
      if (distanceToCenter < 100) {
        newActiveIndex = index;
      }
    });

    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  const scrollDown = () => {
    const nextSection = sectionRef.current[1];
    if (nextSection) {
      const offsetTop =
        nextSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-[6%]">
      <div className="max-w-7xl mx-auto py-4 hidden lg:grid grid-cols-2 gap-8">
        <div className="pb-20">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionRef.current[index] = el)}
              className={`py-9 transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-20"
              }`}
              data-section-index={index}
            >
              <div className="ps-[24px] border-l-2 py-2 border-l-black">
                <h1
                  className={`${
                    index === 0
                      ? "text-[40px] leading-[125%]"
                      : "text-[32px] leading-[1.4]"
                  } font-[400] text-[#1c1d24] font-axiformaa mb-[10px]`}
                >
                  {section.heading}
                </h1>

                <div className="text-base text-[#494951]">
                  {index === 0 ? (
                    <div>
                      {section.description.map((desc, i) => (
                        <div key={i} className="flex items-center mb-[8px]">
                          <IoMdCheckmark className="text-green-500 text-[18px] min-w-[18px] mr-2" />
                          <p>{desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>{section.description}</p>
                  )}
                </div>
              </div>
              {index === 0 && (
                <button
                  onClick={scrollDown}
                  className="border m-10 animate-bounce border-black p-4 rounded-full"
                >
                  <FaArrowDown size={20} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="sticky top-24 w-full h-[80vh] flex items-center">
          {sections.map((section, index) => (
            <img
              key={index}
              src={section.image}
              alt="Hospitality"
              className={`absolute top-0 h-full w-auto left-1/2 -translate-x-1/2 object-cover rounded-lg transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transition: "opacity 0.5s ease-in-out",
                display: index === activeIndex ? "block" : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Small & Medium Devices Content */}
      <div className="mx-auto py-12 space-y-9 lg:hidden">
        <div className="w-full h-auto flex items-center">
          <img
            src={sections[0].image}
            alt="Hospitality"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="ps-[9px] space-y-5">
          <h1 className="text-[25px] leading-[125%] font-[400] text-[#1c1d24] font-axiformaa">
            {sections[0]?.heading}
          </h1>

          <div className="text-base text-[#494951]">
            {sections[0].description.map((desc, i) => (
              <div key={i} className="flex items-center sm:gap-4 gap-2">
                <IoMdCheckmark className="text-green-500 text-[15px] min-w-[15px] mr-2" />
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
