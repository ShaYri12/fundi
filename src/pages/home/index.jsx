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
import Hero from "./Hero";
import FAQ from "./FAQ";
import SimplifiesOperations from "./SimplifiesOperations";
import DoesItAll from "./DoesItAll";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="transition-[background] duration-[.6s] bg-[#efefef] pb-[60px] md:pb-[80px] lg:pt-28 sm:pt-36 pt-28">
        <Hero />

        <Brands />
        <WhatFundi />
      </div>
      <DoesItAll />

      <BannerOne />
      <Technology />
      <SimplifiesOperations />
      <CertifiedCompanies />
      <Testimonials />
      <LearnMore />
      <MakeItRemarkable />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
