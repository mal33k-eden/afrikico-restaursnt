"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, HelpCircle } from "lucide-react"
import Button from "../../../components/ui/Button"


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

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
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="inline-block relative mb-4">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                POPULAR QUESTIONS
              </div>
            </div>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-5"
            >
             Frequently Asked Questions
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
             Here are some common questions our customers ask. If you don't find your answer here, please feel free to reach out to us directly!
            </p>
            <Button text="Read More" icon={HelpCircle} to={'/faq'}/>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border rounded-md overflow-hidden ${
                  openIndex === index ? "bg-orange-10 border-orange-100" : "bg-gray-50 border-gray-200"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3
                    className={`text-lg font-semibold ${
                      openIndex === index ? "text-primary-orange" : "text-gray-800"
                    } transition-colors duration-300`}

                  >
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 pt-0 text-gray-600">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
