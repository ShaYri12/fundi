import React from "react";
import Basiq from "../../assets/basiq.svg";
import Stripe from "../../assets/powered-by-stripe.png";
import Pcidas from "../../assets/pci-dass.png";

const CertifiedCompanies = () => {
  return (
    <section className="px-4 pb-[60px] md:pb-20 mt-14">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="max-w-[820px] w-full mb-[60px] mx-auto text-center">
          <h3 className="text-night-black font-axiforma-r text-[32px] md:text-[48px] leading-[1.25] mb-4">
            Certified by the best
          </h3>

          <p className="text-[#494951] text-base inter-f">
            We are proud to partner with industry leaders such as Basiq and
            Stripe, ensuring that our platform offers robust financial
            solutions. Fundi is also PCI DSS compliant, guaranteeing the highest
            level of security for all transactions and data, so you can trust us
            with your fundraising needs.
          </p>
        </div>

        <div className="flex items-center mx-auto justify-center gap-x-7 md:gap-x-14 gap-y-7 flex-wrap">
          <img
            src={Basiq}
            alt="Basiq logo"
            className="h-7 md:h-10 cursor-pointer"
          />
          <img
            src={Stripe}
            alt="Powered by Stripe logo"
            className="h-8 md:h-12 cursor-pointer"
          />
          <img
            src={Pcidas}
            alt="PCI DSS logo"
            className="h-8 md:h-12 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default CertifiedCompanies;
