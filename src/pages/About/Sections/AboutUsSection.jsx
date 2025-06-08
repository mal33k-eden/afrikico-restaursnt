import { Check } from "lucide-react";

export default function AboutUsSection() {
  const specialDishes = [
    "Waakye, served with stew, spicy sauce, gari, or fried plantain",
    "Spinach Stew served solo or with your choice of protein",
    "Fried Rice with vegetables and soy with your choice of protein",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative z-10 max-w-md">
              <img
                src="https://img.freepik.com/premium-photo/traditional-eastern-european-feast-spread_711700-19015.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740"
                alt="afrikico"
                className="w-full h-90 lg:w-170 lg:h-full md:w-170 md:h-full rounded-md shadow-lg object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 md:-right-2 z-20 w-64 md:w-80">
              <img
                src="https://img.freepik.com/premium-photo/plate-with-all-food-world_144356-17847.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740"
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
