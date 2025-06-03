import { Utensils } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function HeroSection() {

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <div className="space-y-8 text-center lg:text-left ">
            <div className="space-y-2">
              <p className="text-primary-orange font-semibold text-sm md:tebg-gradient-to-br from-gray-600 via-black to-gray-800 tracking-[0.2em] uppercase animate-fade-in-up">
              Hi, Welcome to Afrikico
              </p>
            </div>

            <div className="space-y-4 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">The Best Taste </span>
                <br />
                <span className="text-white">of </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400 stroke-text">
                Africa
                </span>
              </h1>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up">
             Our menu is a vibrant collection of African dishes, crafted to bring joy and an authentic taste of home to you.
            </p>
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <Button text="About us"  to={'/about'} />
              <Button text="Check Menu" icon={Utensils}  to={'/menu'}/>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 hidden md:block">
            <div className="relative animate-fade-in-right h-[300px] md:h-[100px] w-full mb-90">
              <div className="relative  w-full">
                <div className="relative w-full overflow-hidden animate-float mt-5 rounded-4xl">
                  <img
                    src="https://images.unsplash.com/photo-1665332195309-9d75071138f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover h-full w-full scale-110 hover:scale-125 transition-transform duration-700 animate-subtle-rotate"
                  />
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-sm animate-pulse-slow delay-500"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tl from-orange-400/30 to-transparent rounded-full blur-sm animate-pulse-slow delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
