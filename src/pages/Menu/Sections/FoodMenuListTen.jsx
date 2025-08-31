const FoodMenuListTen = () => {
  // soups
  const soupsMenuItems = [
    {
      name: "Light Soup (Goat)",
      image: "../images/food-img/dummy.jpg",
      price: 22.99,
    },
    {
      name: "Palm Nut Soup (Fish/Chicken/Goat Meat/Beef)",
      image: "../images/food-img/dummy.jpg",
      price: 22.99,
    },
    {
      name: "Okro Soup (Fish/Chicken/Goat Meat/Beef)",
      image: "../images/food-img/dummy.jpg",
      price: 22.99,
    },
    {
      name: "Peanut Soup (Fish/Chicken/Goat Meat/Beef)",
      image: "../images/food-img/dummy.jpg",
      price: 22.99,
    },
  ];

  return (
    <>
      <section className="py-5 px-4 bg-[#f4f4f4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4 ">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                SOUPS
              </div>
            </div>
            <p className="text-xl md:text-2xl lg:text-2xl text-gray-800 leading-tight">
              Extra side dishes are always available for soups.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {soupsMenuItems.map((item, index) => (
              <div key={index} className="border-b-2 border-gray-200 pb-5">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl md:text-2xl pr-2 font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <span className="text-base md:text-2xl font-bold text-gray-800 whitespace-nowrap flex-shrink-0">
                        $ {item.price}
                      </span>
                    </div>
                    {/* <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodMenuListTen;
