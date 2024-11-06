"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "How much does it cost to use Fundi?",
    answer:
      "Contact our sales team for detailed pricing information tailored to your organization's needs.",
  },
  {
    id: 2,
    question: "How does Fundi help us increase donations?",
    answer:
      "Fundi offers multiple donation options, including round-up spare change, weekly subscriptions, and or time donations. Additionally, fundi have a seamless silent auction function and live volunteer vetting service. With personalised dashboards, gamified rankings, and seamless social media integration, Fundi helps engage your supporters and boost recurring donations.",
  },
  {
    id: 3,
    question: "How do we manage our fundraising campaigns and data?",
    answer:
      "Our platform provides comprehensive tools for campaign management and data analytics.",
  },
  {
    id: 4,
    question: "Is the platform secure for handling donations?",
    answer:
      "Yes, we implement industry-standard security protocols to protect all transactions.",
  },
  {
    id: 5,
    question: "What kind of support do we receive from Fundi?",
    answer:
      "We provide 24/7 customer support, training resources, and dedicated account managers.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
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
