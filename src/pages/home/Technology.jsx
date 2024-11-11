import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import currencyCircle from "../../assets/currency-circle-warning-icon.svg";

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
          <div className="flex flex-col gap-4">
            <RxDashboard className="text-[40px] text-[#ff5a65]" />
            <p className="text-base font-axiforma-r font-[600] text-night-black">
              Enhanced dashboard and reporting
            </p>

            <p className="text-[#494951] text-base inter-f">
              Experience unparalleled insights with our enhanced dashboard,
              providing comprehensive reporting that empowers you to make
              data-driven decisions.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <RiSecurePaymentLine className="text-[40px] text-[#ff5a65]" />
            <p className="text-base font-axiforma-r font-[600] text-night-black">
              Secure payment processing
            </p>

            <p className="text-[#494951] text-base inter-f">
              Rest assured with our secure payment processing system, ensuring
              that all transactions are protected and compliant with the highest
              industry standards.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <BsPlusSquare className="text-[40px] text-[#ff5a65]" />
            <p className="text-base font-axiforma-r font-[600] text-night-black">
              Comprehensive CRM
            </p>

            <p className="text-[#494951] text-base inter-f">
              Leverage our comprehensive CRM to foster deeper relationships with
              supporters, streamline communication, and enhance your fundraising
              efforts.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <FaRegClock className="text-[40px] text-[#ff5a65]" />
            <p className="text-base font-axiforma-r font-[600] text-night-black">
              Real-time tracking
            </p>

            <p className="text-[#494951] text-base inter-f">
              Benefit from real-time tracking of your fundraising activities,
              enabling you to monitor progress and adapt strategies instantly
              for maximum impact.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <FiUploadCloud className="text-[40px] text-[#ff5a65]" />
            <p className="text-base font-axiforma-r font-[600] text-night-black">
              Supporter Social Content & Sharing
            </p>

            <p className="text-[#494951] text-base inter-f">
              Seamlessly integrated social media features allow supporters to
              easily upload and share their content, fostering community
              engagement and amplifying your cause.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <img src={currencyCircle} alt="" className="w-[40px] h-[40px]" />
            <p className="text-base font-axiforma-r font-[600] text-night-black">
              No integration fees
            </p>

            <p className="text-[#494951] text-base inter-f">
              Enjoy the advantage of no integration or dashboard fees, allowing
              you to implement our platform seamlessly without hidden costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
