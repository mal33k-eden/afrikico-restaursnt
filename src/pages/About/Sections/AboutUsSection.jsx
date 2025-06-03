import { Check } from "lucide-react";

export default function AboutUsSection() {
  const specialDishes = [
    "Indonesian Fried Rice. Choice of Chicken, Beef Steak",
    "Wok-fry thin rice noodle. Rice noodle, chicken",
    "Turmeric coconut rice, chicken sate with peanut sauce",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative z-10 max-w-md">
              <img
                src="https://images.unsplash.com/photo-1705088293220-c1a22b5d214a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="afrikico"
                className="w-full h-90 lg:w-170 lg:h-full md:w-170 md:h-full rounded-md shadow-lg object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 md:-right-2 z-20 w-64 md:w-80">
              <img
                src="https://images.unsplash.com/photo-1634324092526-91f5e878b72f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
                alt="afrikico"
                className="w-full h-auto rounded-md shadow-lg border-4 border-white"
              />
            </div>
          </div>

          <div className="space-y-6 md:pl-8">
            <div className="inline-block">
              <div className="bg-primary-orange text-white px-6 py-2 text-sm font-bold tracking-wider uppercase relative">
                ABOUT US
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Afrikico – More Than Just a Meal
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At Afrikico, we're all about the everyday African meals that resonate with real meaning. These are the flavors we grew up with, craved, and now craft exactly as they should be. <br /> <br />
              We're talking Jollof with true depth, Suya with the perfect heat, and stews that take their time for a reason. Whether you know these tastes intimately or are trying them for the first time, our goal is simple: let the flavors speak for themselves. 
            </p>
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Our Special Dish Of The Day
              </h3>

              <div className="space-y-3">
                {specialDishes.map((dish, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-gray-600">{dish}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
