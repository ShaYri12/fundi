import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import firstFloorImage from "../../assets/project-files-01.png";
import secondFloorImage from "../../assets/project-files-02.png";
import thirdFloorImage from "../../assets/project-files-03.png";

const DoesItAll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);

  const sections = [
    {
      heading: "Mews Hospitality Cloud - Floor 1",
      description:
        "Your property is more than a building with beds. The first floor offers essential guest services to ensure a pleasant stay.",
      image: firstFloorImage,
    },
    {
      heading: "Floor 2 - Unlock More Revenue",
      description:
        "The second floor is dedicated to premium services that maximize revenue streams with innovative solutions.",
      image: secondFloorImage,
    },
    {
      heading: "Floor 3 - Enhance Guest Experience",
      description:
        "On the third floor, you will find luxury amenities to create memorable guest experiences.",
      image: thirdFloorImage,
    },
  ];

  // Function to handle scrolling within the sticky section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.clientHeight;
      const stickyHeight = stickyRef.current.clientHeight;

      // Check if we are within the sticky section area
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight - stickyHeight
      ) {
        const relativeScroll = scrollPosition - sectionTop;
        const scrollFraction = relativeScroll / (sectionHeight - stickyHeight);
        const newSection = Math.min(
          Math.floor(scrollFraction * sections.length),
          sections.length - 1
        );

        if (newSection !== currentSection) {
          setCurrentSection(newSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, sections.length]);

  return (
    <div ref={sectionRef} className="relative min-h-[300vh] bg-gray-100">
      {/* Sticky container for the content */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
      >
        {/* Main container for text and image */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {sections[currentSection] && (
                <motion.div
                  key={currentSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-left"
                >
                  <h1 className="text-4xl font-bold text-gray-800">
                    {sections[currentSection].heading}
                  </h1>
                  <p className="mt-4 text-lg text-gray-600">
                    {sections[currentSection].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] w-full">
            <AnimatePresence mode="wait">
              {sections[currentSection] && (
                <motion.img
                  key={currentSection}
                  src={sections[currentSection].image}
                  alt={`Floor ${currentSection + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoesItAll;
