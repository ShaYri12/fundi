import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Brands from "./Brands";
import WhatFundi from "./WhatFundi";
import BannerOne from "./BannerOne";
import Technology from "./Technology";
import CertifiedCompanies from "./CertifiedCompanies";
import Testimonials from "./Testimonials";
import LearnMore from "./LearnMore";
import MakeItRemarkable from "./MakeItRemarkable";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="transition-[background] duration-[.6s] bg-[#efefef] pb-[60px] md:pb-[80px] mt-20">
        <Brands />
        <WhatFundi />
      </div>

      <BannerOne />
      <Technology />
      <CertifiedCompanies />
      <Testimonials />
      <LearnMore />
      <MakeItRemarkable />
      <Footer />
    </div>
  );
};

export default Home;
