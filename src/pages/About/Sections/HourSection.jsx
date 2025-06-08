import { Award } from "lucide-react";

export default function HourSection() {
  const openingHours = [
    { days: "Tue - Thur:", time: "11:00 am - 09:00pm" },
    { days: "Friday:", time: "11:00 am - 10:30pm" },
    { days: "Saturday:", time: "11:00 am - 12:00 pm" },
    { days: "Sunday:", time: "10:00 am - 9:00 pm" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Always <span className="text-primary-orange">Open</span> for You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're ready to serve you exceptional food throughout the day. From early morning to late evening, Afrikico is open to satisfy your cravings. Your perfect meal is always just a visit away.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Committed to Excellence
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
            We're dedicated to providing outstanding quality in every aspect, from the freshness of our ingredients to the warmth of our service. <br /> We strive to create a welcoming atmosphere where every customer truly feels at home.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://img.freepik.com/free-photo/fried-chicken-with-grilled-potatoes-eggplants-tomatoes-peppers_140725-7841.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740"
                  alt="Chef preparing gourmet dishes"
                  className="w-full h-90 md:w-200 lg:w-full lg:h-90 sm:w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Opening hours
              </h3>
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b-1 text-gray-300"
                  >
                    <span className="text-gray-900 font-semibold">
                      {schedule.days}
                    </span>
                    <span className="text-gray-800 font-medium">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 border-2 border-primary-orange rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Exceptional Quality
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
              Made with care. Served with pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
