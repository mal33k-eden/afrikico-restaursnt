import { Mail, Phone, MapPin } from "lucide-react";
import BreadCrumb from "../../components/common/BreadCrumb";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@afrikicorestaurant.com"],
    },
    {
      icon: Phone,
      title: "Business Phone",
      details: ["+ 240-707-8260"],
    },
    {
      icon: MapPin,
      title: "Our Address",
      details: [
        "222E Oak Ridge Dr. Hagerstown MD 21740",
        "Hagerstown, Maryland",
      ],
    },
  ];
  return (
    <>
      <BreadCrumb />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-[#faf5f5] p-8 rounded-md flex flex-col items-center text-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <item.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
