import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Brands from "./Brands";
import WhatFundi from "./WhatFundi";
import BannerOne from "./BannerOne";
import Technology from "./Technology";
import CertifiedCompanies from "./CertifiedCompanies";
import Testimonials from "./Testimonials";
import MakeItRemarkable from "./MakeItRemarkable";
import Hero from "./Hero";
import FAQ from "./FAQ";
import SimplifiesOperations from "./SimplifiesOperations";
import Hospitality from "./Hospitality";

const Home = () => {
  const colors = useMemo(() => ["#EFEFFF", "#E6F5F0"], []); // This will only be initialized once

  const [bgColor, setBgColor] = useState(colors[0]); // Initial background color

  useEffect(() => {
    // Set an interval to change the background color every 2 to 3 seconds
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor); // Update the background color
    }, Math.floor(Math.random() * 500) + 2000); // Random interval between 2s and 3s

    // Cleanup the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div>
      <Header />
      <div
        className="transition-background duration-[.6s] pb-[60px] md:pb-[80px] lg:pt-28 sm:pt-28 pt-[80px]"
        style={{ backgroundColor: bgColor }}
      >
        <Hero />

        <Brands />
        <WhatFundi />
      </div>
      {/* <DoesItAll /> */}
      <Hospitality />

      <BannerOne />
      <Technology />
      <SimplifiesOperations />
      <CertifiedCompanies />
      <Testimonials />
      <MakeItRemarkable />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
