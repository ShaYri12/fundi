import React from "react";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkden from "../assets/linkden.png";
import Youtube from "../assets/youtube.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-night-black">
      <div className="py-10 border-b border-white border-opacity-50 px-4">
        <div className="max-w-[1440px] w-full mx-auto flex md:flex-row flex-col flex-wrap justify-between md:items-center gap-6">
          <div>
            <strong className="font-bold inter-f text-[#ffffffcc]">
              Join our newsletter
            </strong>

            <div className="mt-3 flex md:items-center justify-start flex-col sm:flex-row sm:gap-6 gap-4">
              <input
                type="email"
                placeholder="example@email.com"
                autoComplete="email"
                className="max-w-full md:max-w-[300px] w-full border focus:border-[#3b37f2] hover:border-[#8d8dac] border-white outline-none rounded-[80px] min-h-11 py-[10px] px-5 bg-transparent text-sm inter-f transition-all duration-500"
              />

              <button className="border border-[#ff5a65] text-[#ff5a65] py-[10px] px-5 rounded-[80px] text-[15px] inter-f font-medium min-w-[130px] w-[130px] transition-all duration-500 hover:border-[#db4550] hover:text-[#db4550]">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link
                  to="#"
                  className="flex items-center justify-center h-10 sm:h-11 w-10 sm:w-11 rounded-full border border-white/80 transition-[background-color] duration-200 hover:bg-white/80"
                >
                  <img src={Facebook} alt="Facebook" className="h-[22px]" />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="flex items-center justify-center h-10 sm:h-11 w-10 sm:w-11 rounded-full border border-white/80 transition-[background-color] duration-200 hover:bg-white/80"
                >
                  <img src={Linkden} alt="Linkden" className="h-5" />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="flex items-center justify-center h-10 sm:h-11 w-10 sm:w-11 rounded-full border border-white/80 transition-[background-color] duration-200 hover:bg-white/80"
                >
                  <img src={Instagram} alt="Instagram" className="h-5" />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="flex items-center justify-center h-10 sm:h-11 w-10 sm:w-11 rounded-full border border-white/80 transition-[background-color] duration-200 hover:bg-white/80"
                >
                  <img src={Youtube} alt="Youtube" className="h-[17px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-10 px-4">
        <div className="max-w-[1440px] w-full mx-auto">
          <ul className="flex flex-col gap-y-3">
            <li className="">
              <Link
                href="#"
                className="inline-block font-axiforma text-normal sm:text-[22px] text-white relative transition-[padding] duration-300 hover:pl-12 before:content-[url(https://5255565.fs1.hubspotusercontent-na1.net/hubfs/5255565/mews01/Global/Icons/white-footer-link-icon.svg)] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:leading-[1px] before:opacity-0 before:transition-[opacity] before:duration-300 hover:before:opacity-100"
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="inline-block font-axiforma text-normal sm:text-[22px] text-white relative transition-[padding] duration-300 hover:pl-12 before:content-[url(https://5255565.fs1.hubspotusercontent-na1.net/hubfs/5255565/mews01/Global/Icons/white-footer-link-icon.svg)] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:leading-[1px] before:opacity-0 before:transition-[opacity] before:duration-300 hover:before:opacity-100"
              >
                Pricing{" "}
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="inline-block font-axiforma text-normal sm:text-[22px] text-white relative transition-[padding] duration-300 hover:pl-12 before:content-[url(https://5255565.fs1.hubspotusercontent-na1.net/hubfs/5255565/mews01/Global/Icons/white-footer-link-icon.svg)] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:leading-[1px] before:opacity-0 before:transition-[opacity] before:duration-300 hover:before:opacity-100"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
