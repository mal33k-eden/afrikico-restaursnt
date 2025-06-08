import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BreadCrumb from "../../components/common/BreadCrumb";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqItems = [
    {
    question: "Is your food spicy?",
    answer:
        "Some dishes are spicy, while others are mild. If you prefer less heat, we can adjust many dishes to your taste. Just ask!",
    },
    {
    question: "Do you offer takeout or delivery?",
    answer:
        "Yes, we offer both takeout and delivery. Please check our website or call us for details on delivery areas and hours.",
    },
    {
    question: "Do you have a kids’ menu?",
    answer:
        "We don't have a separate kids' menu, but many of our dishes can be made milder and kid-friendly. Feel free to ask our staff for suggestions.",
    },
    {
    question: "Are your dishes suitable for sharing?",
    answer:
        "Absolutely! Many of our dishes are perfect for sharing, so feel free to order family-style and try a bit of everything.",
    },
    {
      question: "Do you cater for events or parties?",
      answer:
        "Yes, we offer catering services for events of all sizes. Contact us to learn more about our menu options and pricing.",
    },
    {
    question: "How long does it take to prepare meals?",
    answer:
        "Our meals are made fresh and usually take 15–25 minutes. To save time, feel free to call ahead and pre-order.",
    },
    {
      question: "What if I have allergies or dietary needs?",
      answer:
        "Please let us know when ordering. While we do our best to accommodate special requests, kindly note that our kitchen does use nuts, seafood, dairy, and other common allergens.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div>
      <BreadCrumb />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1739754518882-47c67ef8fa5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                alt="restaurant"
                className="w-full h-full lg:h-150 sm:h-50 md:h-full rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block relative">
                  <div className="bg-primary-orange text-white px-6 py-2 text-sm font-bold tracking-wider uppercase relative">
                    POPULAR QUESTIONS
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Here are some common questions our customers ask. If you don't find your answer here, please feel free to reach out to us directly!
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "text-orange-100"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          openIndex === index
                            ? "text-primary-orange"
                            : "text-gray-800"
                        }`}
                      >
                        {item.question}
                      </h3>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-white flex-shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-4 pt-0 text-gray-800">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
