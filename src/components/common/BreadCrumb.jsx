import React from "react"
import { Home, ChevronRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const BreadCrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="relative h-50 md:h-56 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1705088295626-d9fde0f57f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
          alt="Breadcrumb Background"
          className="w-full h-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/67 to-black/55"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-primary-orange drop-shadow-lg">
            {pathnames.length > 0
              ? pathnames[pathnames.length - 1].charAt(0).toUpperCase() +
                pathnames[pathnames.length - 1].slice(1).replace( " ")
              : "Home"}
          </span>
        </h1>
        <nav className="flex items-center justify-center">
          <ol className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <li className="flex items-center">
              <Link
                to="/"
                className="flex items-center space-x-1 text-white hover:text-[#ff5e14] transition-colors duration-300 group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Home</span>
              </Link>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
              const isLast = index === pathnames.length - 1
              const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(" ")

              return (
                <React.Fragment key={name}>
                  <li>
                    <ChevronRight className="w-4 h-4 text-[#AD571E]" />
                  </li>
                  <li>
                    {isLast ? (
                      <span className="text-[#ff5e14] font-semibold">{displayName}</span>
                    ) : (
                      <Link
                        href={routeTo}
                        className="text-white hover:text-[#ff5e14] transition-colors duration-300 font-medium"
                      >
                        {displayName}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default BreadCrumb
