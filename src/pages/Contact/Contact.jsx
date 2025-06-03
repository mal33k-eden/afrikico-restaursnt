import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin } from "lucide-react";
import BreadCrumb from "../../components/common/BreadCrumb";
import Button from "../../components/ui/Button";
import FlashMessage from "../../components/ui/FlashMessage";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnnvqqgg");
  const [showMessage, setShowMessage] = useState(false);
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@afrikico.com", "info2@afrikico.com"],
    },
    {
      icon: Phone,
      title: "Business Phone",
      details: ["+ 240-707-8260", "+ 240-(707)-8260"],
    },
    {
      icon: MapPin,
      title: "Our Address",
      details: [
        "222E Oak Ridge Dr. Hagerstown MD 21740",
        "Hagerstown, Maryland",
      ],
    },
  ];
  const handleSuccess = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);
  };
  const onSubmit = (e) => {
    handleSubmit(e).then((res) => {
      if (res.body.ok) {
        handleSuccess();
      }
    });
  };

  return (
    <>
      {showMessage && (
        <FlashMessage
          message="Your message has been sent successfully!"
          onClose={() => setShowMessage(false)}
        />
      )}
      <BreadCrumb />
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4 grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-md shadow-sm flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center">
                      <item.icon
                        className="w-6 h-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <div className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-8 bg-white p-8 rounded-md shadow-sm">
              <div className="mb-8">
                <div className="inline-block relative mb-4">
                  <div className="bg-primary-orange text-white px-6 py-2 text-sm font-bold tracking-wider uppercase relative">
                    CONTACT US
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  Get In Touch
                </h2>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                  />
                </div>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent resize-none"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <Button
                  text={state.submitting ? "Sending..." : "SEND MESSAGE"}
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
