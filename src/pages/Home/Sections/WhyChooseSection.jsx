import { Menu, Leaf, ChefHat } from "lucide-react"

const WhyChooseSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
           
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why People Choose Us?</h2>
            <p className="text-gray-500 text-lg">Here's what our customers consistently appreciate about Afrikico.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            <div className="text-center">
              <div className="flex justify-center mb-8">
                <Menu className="w-16 h-16 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Something for Everyone</h3>
              <p className="text-gray-500 leading-relaxed">
                Whether you’re a longtime fan or trying African food for the first time, our varied menu offers something delicious for every palate.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <Leaf className="w-16 h-16 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Fresh Food</h3>
              <p className="text-gray-500 leading-relaxed">
              We carefully select the freshest produce, spices, and meats so every dish bursts with authentic African flavor and quality you can taste.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <ChefHat className="w-16 h-16 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skilled Hands in the Kitchen</h3>
              <p className="text-gray-500 leading-relaxed">Our expert chefs bring years of experience and passion to every dish they prepare.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WhyChooseSection