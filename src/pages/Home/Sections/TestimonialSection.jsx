import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Alfred",
      role: "Customer",
      rating: 4,
      text: "Afrikico is simply fantastic! The Jollof Rice brought back so many great childhood memories, and the whole place feels so friendly. Every dish tastes like pure comfort. I can't recommend it enough!",
      image:
        "https://media.istockphoto.com/id/2176673995/photo/portrait-of-a-mid-adult-man-eating-on-a-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=TeCBTD2UJWdmI-ki2JH295HIaSRPidc1BQGpKk-V9QI=",
    },
    {
      id: 2,
      name: "Aisha Nuhu",
      role: "Happy Diner",
      rating: 5,
      text: "I brought my family here last week, and every single dish was a winner. The Grilled Tilapia was perfectly cooked, and the pepper sauce had just the right kick. We'll definitely be regulars!",
      image:
        "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 3,
      name: "Sarah Mason",
      role: "First-Time Explorer",
      rating: 5,
      text: "I'd never really tried African food before, but Afrikico was such an incredible introduction! The staff were so helpful in guiding me through the menu, and the Waakye was absolutely delicious. Every bite was a new flavor adventure. I'm already planning my next visit!",
      image:
        "https://media.istockphoto.com/id/466334360/photo/cant-talk-in-the-cupcake-zone.webp?a=1&b=1&s=612x612&w=0&k=20&c=_XinWmobX7iqZGqIahk-VmMOoXcFWMcp9eU0QpnGUvo=",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="py-16 px-4 bg-[#F8F1ED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-block relative">
            <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                OUR TESTIMONIAL
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              What People Say About Afrikico
            </h2>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <img
                src={currentReview.image}
                alt={`${currentReview.name}`}
                className="w-full h-full md:w-200 lg:w-full lg:h-90 sm:w-full object-cover rounded-lg shadow-lg transition-all duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="flex space-x-1">
              {[...Array(currentReview.rating)].map((_, index) => (
                <Star
                  key={index}
                  className="w-6 h-6 fill-primary-orange text-primary-orange"
                />
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
              {currentReview.text}
            </p>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                {currentReview.name}
              </h3>
              <p className="text-primary-orange font-bold text-sm tracking-wider uppercase">
                {currentReview.role}
              </p>
            </div>

            <div className="flex space-x-2 pt-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-primary-orange hover:bg-orange-900 text-white flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-primary-orange hover:bg-orange-900 text-white flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
