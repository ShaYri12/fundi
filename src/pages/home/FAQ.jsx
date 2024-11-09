"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "How much does it cost to use Fundi?",
    answer:
      "Fundi is completely free for all Australian churches, schools, and clubs. There are no contracts, hosting, or dashboard fees, and you receive 100% of all supporter payments. If you'd like to access more advanced features like Vetti, Silenti and high-level analytics reports, you can choose a fundi tier account.",
  },
  {
    id: 2,
    question: "How does Fundi help us increase donations?",
    answer:
      "Fundi offers multiple donation options, including round-up spare change, weekly subscriptions, and one-time donations. Additionally, fundi have a seamless silent auction function and live volunteer vetting service. With personalised dashboards, gamified rankings, and seamless social media integration, Fundi helps engage your supporters and boost recurring donations.",
  },
  {
    id: 3,
    question: "How do we manage our fundraising campaigns and data?",
    answer:
      "You’ll have access to a personalised dashboard where you can manage donations, track progress in real-time. Fundi’s CRM functionality also allows you to access insights and analytics to help you make informed decisions.",
  },
  {
    id: 4,
    question: "Is the platform secure for handling donations?",
    answer:
      "Absolutely. Fundi uses Stripe for secure, PCI-compliant payment processing and integrates with Basiq technology to ensure safe and efficient transactions. Supporters can donate with confidence, knowing their data is protected.",
  },
  {
    id: 5,
    question: "What kind of support do we receive from Fundi?",
    answer:
      "Fundi provides a unique QR code, links and a partner support pack to make sharing your fundraising efforts easy. Additionally, automated tax receipting, weekly summaries, and access to tools like Silenti for silent auctions and Vetti™ for live volunteer vetting are all included to simplify your fundraising journey.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20" id="faq">
      <h1 className="text-4xl font-bold text-black font-axiformaa mb-9 text-center">
        Frequently asked questions
      </h1>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="bg-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleQuestion(faq.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-200 hover:bg-opacity-[0.3] transition"
            >
              <span className="text-black font-medium text-lg">
                {faq.question}
              </span>
              <span
                className={`text-black ml-4 transition-transform duration-300 ${
                  openId === faq.id ? "rotate-180" : ""
                }`}
              >
                {openId === faq.id ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openId === faq.id ? "max-h-[200px]" : "max-h-0 "
              }`}
            >
              <div className="px-4 pb-4">
                <p className="text-black pt-2">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
