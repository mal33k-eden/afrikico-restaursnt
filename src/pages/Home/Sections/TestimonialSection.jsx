import { Star } from "lucide-react"

export default function TestimonialSectionRedesigned() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Alfred",
      role: "Customer",
      rating: 4,
      text: "Afrikico is simply fantastic! The Jollof Rice brought back so many great childhood memories, and the whole place feels so friendly. Every dish tastes like pure comfort. I can't recommend it enough!",
      image:
        "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      name: "Aisha Nuhu",
      role: "Happy Diner",
      rating: 5,
      text: "I brought my family here last week, and every single dish was a winner. The Grilled Tilapia was perfectly cooked, and the pepper sauce had just the right kick. We'll definitely be regulars!",
      image:
        "https://plus.unsplash.com/premium_photo-1745624797647-37ddb5c77b65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 3,
      name: "Sarah Mason",
      role: "First-Time Explorer",
      rating: 5,
      text: "Afrikico was such an incredible introduction to African food! The staff were so helpful in guiding me through the menu, and the Waakye was absolutely delicious. Every bite was a new flavor adventure. I'm already planning my next visit!",
      image:
        "https://media.istockphoto.com/id/466334360/photo/cant-talk-in-the-cupcake-zone.webp?a=1&b=1&s=612x612&w=0&k=20&c=_XinWmobX7iqZGqIahk-VmMOoXcFWMcp9eU0QpnGUvo=",
    },
  ]

  return (
    <section className="py-16 px-4 bg-[#F8F1ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
              OUR TESTIMONIAL
            </div>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto"
          >
            What People Say About Afrikico
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.rating ? "fill-orange-500 text-primary-orange" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">"{testimonial.text}"</p>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-primary-orange font-medium text-sm uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
