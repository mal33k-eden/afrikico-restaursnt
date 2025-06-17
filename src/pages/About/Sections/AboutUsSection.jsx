import { Check } from "lucide-react";

export default function AboutUsSection() {
  const specialDishes = [
    "Chicken or  fish and  fries",
    "Waakye/ meat stew.",
    "Jollof/ Chicken",
    "Bean/ plantain",
    "Chicken/ beef wrap",
    "Tuna and cheese toast",
    "Kenkey and fish.",
    "Veggie Wrap",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative">
              <img
                src="../images/food-img/img-16.jpg"
                alt=""
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 w-67 h-60">
              <img
                src="../images/food-img/img-7.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-white"
              />
            </div>
          </div>

          <div className="space-y-6 md:pl-8">
            <div className="inline-block">
              <div className="bg-primary-orange text-white px-6 py-2 text-sm font-bold tracking-wider uppercase relative">
                ABOUT US
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Welcome to Afrikico Restaurant
              </h2>
              <p className="text-lg text-primary-orange font-semibold">
                Where Flavor Meets Culture, and Every Meal Tells a Story
              </p>
            </div>

            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Afrikico is more than just a place to eat—it's where West African tradition comes alive through comforting flavors and heartfelt hospitality. From slow-simmered stews to perfectly grilled fish and Jollof rice, each dish is handcrafted with fresh ingredients and bold, authentic spices.
              </p>
              
              <p>
                This restaurant began as a dream—born from childhood memories of home-cooked meals and the joy of sharing them with loved ones. Afrikico is our way of bringing that feeling to you.
              </p>
              
              <p>
                Whether you're dining in, taking out, or ordering ahead, we can't wait to serve you food made with care and culture.
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-700 font-medium">Warmly,</p>
              <div className="mt-2">
                <p className="text-xl font-bold text-gray-800">Ms. J</p>
                <p className="text-primary-orange font-semibold text-sm tracking-wide">
                  FOUNDER & HEAD OF FLAVOR
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">
              Our Lunch Special
              </h3>
              
                <div className="grid grid-cols-2 gap-4">
                {specialDishes.map((dish, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-primary-orange" />
                    </div>
                    <span className="text-gray-700 font-medium">{dish}</span>
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