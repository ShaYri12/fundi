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
      heading: "Fundi simplifies operations for Schools",
      description:
        "Streamline educational facility management from administration to student services, allowing more focus on academic excellence.",
      images: [schools],
      icon: FaSchool,
    },
    clubs: {
      title: "Clubs",
      heading: "Fundi simplifies operations for Clubs",
      description:
        "Manage member experiences, events, and facilities seamlessly while maximizing engagement and satisfaction.",
      images: [clubs],
      icon: FaUsers,
    },
    churches: {
      title: "Churches",
      heading: "Fundi simplifies operations for Churches",
      description:
        "Organize community events, manage facilities, and streamline administrative tasks to focus more on your congregation.",
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
      scrollRef.current.style.transform = `translateY(-${tabIndex * 100}%)`;
      scrollRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [activeTab]);

  return (
    <div className="bg-[#1a2332] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 h-full">
          <div>
            <div className="flex flex-wrap gap-4 mb-16">
              {Object.entries(tabs).map(([key, { title, icon: Icon }]) => (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`
                flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                transition-all duration-300 ease-in-out
                ${
                  activeTab === key
                    ? "bg-white/20 backdrop-blur-md text-white"
                    : "bg-white/10 hover:bg-white/15 text-gray-300"
                }
              `}
                >
                  <Icon className="w-4 h-4" />
                  {title}
                </button>
              ))}
            </div>
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4 transition-opacity duration-300">
                <h1 className="text-5xl font-bold leading-tight">
                  {tabs[activeTab].heading}
                </h1>
                <p className="text-lg text-gray-300">
                  {tabs[activeTab].description}
                </p>
              </div>

              <a
                href="#"
                className="inline-block text-red-400 hover:text-red-300 transition-colors duration-300 group"
              >
                {tabs[activeTab].title} management software{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Scrolling Images */}
          <div className="relative h-full overflow-hidden">
            <div
              ref={scrollRef}
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{
                height: `${Object.keys(tabs).length * 100}%`,
              }}
            >
              {Object.entries(tabs).map(([key, { images }]) => (
                <div
                  key={key}
                  className="h-full flex items-center justify-center"
                >
                  <img
                    src={images[0]}
                    alt={`${key} feature`}
                    className="w-full h-full object-cover rounded-3xl"
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
