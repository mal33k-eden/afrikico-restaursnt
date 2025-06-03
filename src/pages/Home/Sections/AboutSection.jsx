import { Check, X } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function AboutSection() {
  const features = [
    "Flavorful dishes",
    "Skilled chefs",
    "Authentic recipes",
    "Thoughtful preparation",
  ];

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block relative">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                ABOUT US
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Afrikico – More Than Just a Meal
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
            At Afrikico, we're all about the everyday African meals that resonate with real meaning. These are the flavors we grew up with, craved, and now craft exactly as they should be. <br /> We're talking Jollof with true depth, Suya with the perfect heat, and stews that take their time for a reason.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-primary-orange" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start space-x-8">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-primary-orange leading-none">
                  5+
                </div>
                <div className="text-gray-700 font-medium mt-2">
                  years in service
                </div>
              </div>
              <div className="flex-1 pt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                We are proud of our journey and grateful for the loyal community we've built. We look forward to many more years of sharing the taste of Africa with you.

                </p>
              </div>
            </div>
            <div>
             <Button text="READ MORE" to={'/about'}/>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1737756896984-3d87c0479204?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFmcmljYW4lMjBFYXRpbmclMjBGb29kJTIwdG9nZXRoZXJ8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 w-67 h-60">
              <img
                src="https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
