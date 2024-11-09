import { useRef, useState, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Hospitality = () => {
  const sections = [
    {
      heading: "Empower your journey, amplify your mission.",
      description: [
        " No contracts, full flexibility.",
        " Tick Zero fees for hosting, websites, or dashboards.",
        " Tick 100% of donations go directly to your organisation.",
        " Tick Supporters cover all processing fees, ensuring no cost to you.",
        " Tick Full transparency with real-time reporting.",
      ],
      image: "/all.png",
    },
    {
      description:
        "Empower your supporters with multiple ways to give, including round-ups, weekly subscriptions, or one-time donations. Plus, they can now use round-up donations to cover school fees, offering even more value to families.",
      image: "/1.png",
    },
    {
      description:
        "Empower your supporters with multiple ways to give, including round-ups, weekly subscriptions, or one-time donations. Plus, they can now use round-up donations to cover school fees, offering even more value to families.",
      image: "/2.png",
    },
    {
      description:
        "Australia's first real-time volunteer vetting system provides instant checks on police history, criminal records, and working with children checks, ensuring safer, more efficient volunteer management.",
      image: "/3.png",
    },
    {
      description:
        "Run unlimited silent auctions with automated bidding updates and self-checkout. Our system streamlines the entire process, allowing you to focus on engaging your supporters and maximising contributions.",
      image: "/4.png",
    },
  ];

  const sectionRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0); // Track active section index

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = entry.target.getAttribute("data-section-index");
          setActiveIndex(Number(sectionIndex));
        }
      });
    }, observerOptions);

    sectionRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative min-h-[300vh] px-[6%] bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 grid grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="pb-10a">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionRef.current[index] = el)}
              className={`py-20 mb-[100px] transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-20"
              }`} // Highlight active section
              data-section-index={index}
            >
              <div className="ps-[24px] border-l-2 border-l-[#D1D1D3]">
                <h1
                  className={`${
                    index === 0
                      ? "text-[40px] leading-[125%]"
                      : "text-[32px] leading-[1.4]"
                  } font-[400] text-[#1c1d24] font-axiformaa mb-[24px]`}
                >
                  {section?.heading}
                </h1>

                <div className="text-base text-[#494951]">
                  {/* Display green checkmark before the description for the first section */}
                  {index === 0 ? (
                    <div>
                      {section.description.map((desc, i) => (
                        <div key={i} className="flex items-center mb-[8px]">
                          <IoMdCheckmark className="text-green-500 text-[18px] mr-2" />{" "}
                          {/* Green checkmark */}
                          <p>{desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>{section.description}</p> // Display description as is for other sections
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image with Cross-Fade Effect */}
        <div className="sticky top-24 w-full h-[80vh] flex items-center">
          {sections.map((section, index) => (
            <img
              key={index}
              src={section.image}
              alt="Hospitality"
              className={`absolute top-10  w-full h-auto object-cover rounded-lg transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
