import { useRef, useState, useEffect } from "react";

const Hospitality = () => {
  const sections = [
    {
      heading: "Empower your journey, amplify your mission.",
      description:
        "Green Tick - No contracts, full flexibility. Green Tick - Tick Zero fees for hosting, websites, or dashboards. Green Tick - Tick 100% of donations go directly to your organisation. Green Tick - Tick Supporters cover all processing fees, ensuring no cost to you. Green Tick - Tick Full transparency with real-time reporting.",
      image: "/all.png",
    },
    {
      description:
        "Your own supporter-branded and analytic dashboard in minutes! Track campaign progress, monitor engagement, and gain insights—all from an intuitive interface designed to elevate your fundraising.",
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
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionRef.current[index] = el)}
              className={`py-20 transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-20"
              }`} // Highlight active section
              data-section-index={index}
            >
              <div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-800">
                    {section?.heading}
                  </h1>
                  <p className="mt-4 text-lg text-gray-600">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image with Cross-Fade Effect */}
        <div className="sticky top-20 w-full h-[80vh] flex items-center">
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
