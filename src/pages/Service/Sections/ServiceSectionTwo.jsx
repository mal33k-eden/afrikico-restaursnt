import { ChefHat, Leaf, ClipboardList } from "lucide-react"
import { Link } from "react-router-dom"

export default function ServiceSectionTwo() {
  const services = [
    {
      icon: ChefHat,
      title: "Event Catering",
      description: "From corporate events to family celebrations, our catering service offers a customized menu—expertly prepared, beautifully presented, and tailored to your occasion.",
      link: "/menu",
    },
    {
      icon: Leaf,
      title: "Vegan Friendly",
      description: "We offer delicious vegan-friendly options and are happy to adapt dishes to suit your taste or dietary preferences.",
      link: "/menu",
    },
    {
      icon: ClipboardList,
      title: "Special Orders",
      description: "Looking for a specific dish or craving something off-menu? We accept custom food orders with 48 hours' notice. Let us make your favorite meal, your way.",
      link: "/menu",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
          >
            Expertly Crafted Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#faf5f5] p-8 rounded-md transition-all duration-300 hover:shadow-md group">
              <div className="flex items-start mb-6">
                <div className="mr-4">
                  <service.icon className="w-10 h-10 text-primary-orange" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
              </div>    
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="text-primary-orange font-medium uppercase text-sm tracking-wider inline-block group-hover:text-orange-600 transition-colors"
              >
                VIEW MENU
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}