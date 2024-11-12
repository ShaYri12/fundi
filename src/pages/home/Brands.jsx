import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-marquee-slider";
import Logo1 from "../../assets/logos/acu.png";
import Logo2 from "../../assets/logos/aldenaire-partners.png";
import Logo3 from "../../assets/logos/Austi-Church-Logo.png";
import Logo4 from "../../assets/logos/brisbane-lions.png";
import Logo5 from "../../assets/logos/broncos.png";
import Logo6 from "../../assets/logos/churches-of-chirst.png";
import Logo7 from "../../assets/logos/citipointe-church.png";
import Logo8 from "../../assets/logos/collinwood-footbal-club.png";
import Logo9 from "../../assets/logos/cowboys.png";
import Logo10 from "../../assets/logos/crestview.png";
import Logo11 from "../../assets/logos/digital-education.png";
import Logo12 from "../../assets/logos/estelle-academy.png";
import Logo13 from "../../assets/logos/griffith.png";
import Logo14 from "../../assets/logos/images.png";
import Logo15 from "../../assets/logos/institute-of-sport.png";
import Logo16 from "../../assets/logos/la-trobe.png";
import Logo17 from "../../assets/logos/logo1.png";
import Logo18 from "../../assets/logos/logo2.png";
import Logo19 from "../../assets/logos/mfg.png";
import Logo20 from "../../assets/logos/mosman.png";
import Logo21 from "../../assets/logos/ncca_logo.png";
import Logo22 from "../../assets/logos/peps.png";
import Logo23 from "../../assets/logos/qut.png";
import Logo24 from "../../assets/logos/smart-kids.png";
import Logo25 from "../../assets/logos/standrews-cathedral-school.png";
import Logo26 from "../../assets/logos/stapus-gramer-school.png";
import Logo27 from "../../assets/logos/storm.png";
import Logo28 from "../../assets/logos/wardiene-university.png";
import Logo29 from "../../assets/logos/whitehill.png";

const Brands = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [velocity, setVelocity] = useState(8);
  const icons = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
    Logo11,
    Logo12,
    Logo13,
    Logo14,
    Logo15,
    Logo16,
    Logo17,
    Logo18,
    Logo19,
    Logo20,
    Logo21,
    Logo22,
    Logo23,
    Logo24,
    Logo25,
    Logo26,
    Logo27,
    Logo28,
    Logo29,
  ];

  const getLogoStyle = () => {
    return {
      filter: "grayscale(100%) brightness(45%) contrast(100%)", // Convert the logo to a blackish color
      backgroundColor: "transparent", // Ensure the background is transparent
      mixBlendMode: "normal", // Ensure logos blend normally
    };
  };

  // Adjust velocity based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVelocity(4); // Slow down on small devices
      } else {
        setVelocity(8); // Default velocity for larger devices
      }
    };

    handleResize(); // Set the initial velocity based on the current window size
    window.addEventListener("resize", handleResize); // Add event listener for resizing

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pt-[60px] overflow-hidden">
      <div className="max-w-[1440px] text-center w-full mx-auto relative z-10 mb-6 sm:mb-[60px] px-4 text-[#494951] leading-[1.5] text-sm inter-f">
        Our fundraising platform powers 1,200 of the world's best
        organisations.&nbsp;
        <Link to="#" className="text-[#ff5a65] underline">
          See our partners.
        </Link>
      </div>

      <div
        className="w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Marquee Slider */}
        <Marquee
          velocity={isHovered ? 0 : velocity}
          minScale={0.7}
          resetAfterTries={200}
          direction="rtl"
        >
          {/* Mapping over the icons */}
          {icons.concat(icons).map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="banner-icon"
              className="max-h-16 md:max-h-20 w-auto my-0 md:mx-10 mx-7 object-contain"
              loading="lazy"
              style={getLogoStyle()}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
