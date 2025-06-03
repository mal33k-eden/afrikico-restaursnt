import { Wine, Pizza } from "lucide-react"

export default function ServiceSectionOne() {
  const services = [
    {
      icon: Wine,
      title: "Tailored for Any Food",
      description: "Nisi mi habitant iaculis molestie feugiat magna letius",
    },
    {
      icon: Pizza,
      title: "Seamless Service,to Cleanup",
      description: "Nisi mi habitant iaculis molestie feugiat magna letius",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative z-10 max-w-full">
              <img
                src="https://images.unsplash.com/photo-1705088293214-7494366cce01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                alt="afrikico"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            
          </div>
          <div className="space-y-8 md:pl-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Expertly Crafted Services for Events
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <div className="space-y-8 pt-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-primary-orange flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary-orange" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
