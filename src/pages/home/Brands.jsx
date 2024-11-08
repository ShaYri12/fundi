import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo1 from "../../assets/logos/acu.png";
import Logo2 from "../../assets/logos/aldenaire-partners.png";
import Logo3 from "../../assets/logos/Austi-Church-Logo.png";
import Logo4 from "../../assets/logos/brisbane-lions.png";
import Logo5 from "../../assets/logos/broncos.png";
import Logo6 from "../../assets/logos/churches-of-chirst.png";
import Logo7 from "../../assets/logos/citipointe-church.jpg";
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
import Logo18 from "../../assets/logos/logo2.jpg";
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
  const ref = useRef(null);
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
  const [marqueeSpeed, setMarqueeSpeed] = useState(25);

  useEffect(() => {
    const updateSpeed = () => {
      const newSpeed = window.innerWidth < 768 ? 5 : 20;
      setMarqueeSpeed(newSpeed);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    return () => {
      window.removeEventListener("resize", updateSpeed);
    };
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

      <motion.div ref={ref} className="banner" transition={{ duration: 3.5 }}>
        <div
          className="slider-track"
          style={{
            display: "flex",
            animation: `scroll ${marqueeSpeed}s linear infinite`,
          }}
        >
          {icons.concat(icons).map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="banner-icon"
              className="max-h-16 md:max-h-20 w-auto my-0 mx-10 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
