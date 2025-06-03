import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { MapPin } from "lucide-react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0)
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0)
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#faf3ee] to-[#FFFDF9] overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#AD571E]/10 mix-blend-multiply z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1702827482755-cb3c3fdef0c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Afrikico Coming Soon"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="min-h-screen flex items-center justify-center relative z-20">
        <div className="w-full flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full md:max-w-3xl text-center bg-gradient-to-br from-amber-50 via-orange-50 to-[#FFFDF9] rounded-3xl shadow-2xl backdrop-blur-sm  border-white/30 md:p-8 lg:p-10 p-6 sm:p-8 relative overflow-hidden min-h-screen md:min-h-full">
            <div className="flex flex-col items-center justify-center mb-10 relative z-10">
              <img
                src={Logo}
                alt="Afrikico Logo"
                className="relative h-55 w-55 sm:h-55 sm:w-55 lg:h-55 lg:w-110 object-contain -mb-8"
              />
              <p className="text-lg sm:text-xl md:text-xl font-semibold text-[#bc6e3a] drop-shadow-sm text-center">
                Authentic African Dishes
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-medium drop-shadow-sm flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                Hagerstown, Maryland
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 relative z-10">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HOURS" },
                { value: timeLeft.minutes, label: "MINUTES" },
                { value: timeLeft.seconds, label: "SECONDS" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white shadow-lg border-t-4 border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#bc6e3a] mb-2 drop-shadow-sm">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 mb-8 relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight text-center drop-shadow-sm">
                We're launching <span className="text-orange-400">soon!</span>{" "}
                Check back in a few days
              </h1>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-center drop-shadow-sm">
                Exciting things are on the way! Our website is currently under
                construction, and we'll be going live very soon. Stay tuned for
                an experience worth waiting for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
