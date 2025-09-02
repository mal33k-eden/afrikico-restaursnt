import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  const instagramImages = [
    "../images/food-img/img-2.jpg",
    "../images/food-img/img-14.jpg",
    "../images/food-img/img-17.jpg",
    "../images/food-img/img-5.jpg",
    "../images/food-img/img-16.jpg",
    "../images/food-img/img-1.jpg",
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center h-24">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="Afrikico"
                  className="h-40 w-auto object-contain mb-8"
                />
              </Link>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Stay up-to-date with all things Afrikico!
              <br /> Follow us for daily updates, special offers, and events.
            </p>

            <div className="flex space-x-4">
              <Link
                to="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.instagram.com/afrikicoresturant"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4
              className="text-xl font-bold mb-6 text-white"
              style={{ fontFamily: "var(--body-font)" }}
            >
              Working Hours
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-orange-400 font-medium">
                    Tuesday - Thursday
                  </span>
                </div>
                <p className="text-gray-400 ml-4">11:00 am - 09:00pm</p>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-orange-400 font-medium">Friday</span>
                </div>
                <p className="text-gray-400 ml-4">11:00 am - 10:30pm</p>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-orange-400 font-medium">Saturday</span>
                </div>
                <p className="text-gray-400 ml-4">10:00 am - Midnight</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-orange-400 font-medium">Sunday</span>
                </div>
                <p className="text-gray-400 ml-4">10:00 am - 9:00 pm</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4
              className="text-xl font-bold mb-6 text-white"
              style={{ fontFamily: "var(--body-font)" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 text-primary-orange mr-3 mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-orange font-medium mb-1">
                    Location :
                  </p>
                  <p className="text-gray-400">
                    222E Oak Ridge Dr. Suite 900 Hagerstown MD 21740
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-orange font-medium mb-1">
                    Email Address :
                  </p>
                  <Link
                    href="mailto:info@afrikicorestaurant.com"
                    className="text-gray-400 hover:text-[#AD571E] transition-colors"
                  >
                    info@afrikicorestaurant.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 text-primary-orange mr-3 mt-1 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-orange font-medium mb-1">
                    Phone Number :
                  </p>
                  <Link
                    href="tel:  +1 (240)-347-4180"
                    className="text-gray-400 hover:text-[#AD571E] transition-colors"
                  >
                    +1 (240)-347-4180
                    <br />
                  </Link>
                  <Link
                    href="tel:+1 (240)-707-8260"
                    className="text-gray-400 hover:text-[#AD571E] transition-colors"
                  >
                    +1 (240)-707-8260
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4
              className="text-xl font-bold mb-6 text-white"
              style={{ fontFamily: "var(--body-font)" }}
            >
              The Best Taste of Africa!
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <Link
                  key={index}
                  to="https://www.instagram.com/afrikicoresturant/"
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400">
              Copyright © {new Date().getFullYear()} Afrikico. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
