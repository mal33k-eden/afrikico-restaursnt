import { Link } from "react-router-dom"
import Button from "../../components/ui/Button"
import { Home } from "lucide-react"

export default function Error404() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center justify-center">

      <div className="text-center px-4 relative z-10">
        <div className="mb-8">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-primary-orange leading-none tracking-tight">
            404
          </h1>
        </div>
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Oops! This Page Is Not Found.
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto">
            Please go back to home page and try to find the real page.
          </p>
        </div>
        <Button text="BACK TO HOME" to={'/'} icon={Home}/>
      </div>
    </div>
  )
}