import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import currencyCircle from "../../assets/currency-circle-warning-icon.svg";

const features = [
  {
    Icon: RxDashboard,
    title: "Enhanced dashboard and reporting",
    description:
      "Experience unparalleled insights with our enhanced dashboard, providing comprehensive reporting that empowers you to make data-driven decisions.",
  },
  {
    Icon: RiSecurePaymentLine,
    title: "Secure payment processing",
    description:
      "Rest assured with our secure payment processing system, ensuring that all transactions are protected and compliant with the highest industry standards.",
  },
  {
    Icon: BsPlusSquare,
    title: "Comprehensive CRM",
    description:
      "Leverage our comprehensive CRM to foster deeper relationships with supporters, streamline communication, and enhance your fundraising efforts.",
  },
  {
    Icon: FaRegClock,
    title: "Real-time tracking",
    description:
      "Benefit from real-time tracking of your fundraising activities, enabling you to monitor progress and adapt strategies instantly for maximum impact.",
  },
  {
    Icon: FiUploadCloud,
    title: "Supporter Social Content & Sharing",
    description:
      "Seamlessly integrated social media features allow supporters to easily upload and share their content, fostering community engagement and amplifying your cause.",
  },
  {
    Icon: "image",
    title: "No integration fees",
    description:
      "Enjoy the advantage of no integration or dashboard fees, allowing you to implement our platform seamlessly without hidden costs.",
    imgSrc: currencyCircle,
  },
];

const Technology = () => {
  return (
    <section className="lg:px-[80px] px-6 pb-[60px] md:pb-20">
      <div className="container w-full mx-auto">
        <div className="max-w-[520px] w-full mb-[60px]">
          <h3 className="text-night-black font-axiforma-r text-[32px] md:text-[48px] leading-[1.25] mb-4">
            Flexible technology for serious fundraising
          </h3>

          <p className="text-[#494951] text-base inter-f">
            Your organisation has unique fundraising needs, and you need a
            platform that supports them. fundi makes it easy to create your own
            ecosystem with best-in-class tools, or leverage our system to build
            custom solutions that fit your specific goals and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {feature.Icon === "image" ? (
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-[40px] h-[40px]"
                />
              ) : (
                <feature.Icon className="text-[40px] text-[#ff5a65]" />
              )}
              <p className="text-base font-axiforma-r font-[600] text-night-black">
                {feature.title}
              </p>
              <p className="text-[#494951] text-base inter-f">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
