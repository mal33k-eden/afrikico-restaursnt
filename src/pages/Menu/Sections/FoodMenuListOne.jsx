const FoodMenuListOne = () => {
  // Appetizer List
  const appetizerMenuItems = [
    {
      name: "Spring Rolls (2) for",
      description: "Crispy, golden pastry rolls filled with a vibrant medley of seasoned vegetables. A light, flavorful bite to start your meal off right.",
      image: "../images/food-img/dummy.jpg", 
      price:5,
    },
    {
      name: "Beef or Chicken Suya",
      description: "Skewered and grilled to perfection, this traditional West African street food features tender beef and chicken infused with bold suya spices — a smoky, spicy blend that captures the heart of the culture.",
      image: "../images/food-img/dummy.jpg",
      price:10.99,
    },
    {
      name: "Fish Pie",
      description: "Flaky, buttery pastry stuffed with a savory mix of seasoned minced fish. Each bite delivers the comfort and soul of home-cooked goodness.",
      image: "../images/food-img/dummy.jpg",
      price:4.99,
    },
    {
      name: "Meat Pie",
      description: "Flaky, buttery pastry stuffed with a savory mix of seasoned minced meat. Each bite delivers the comfort and soul of home-cooked goodness.",
      image: "../images/food-img/dummy.jpg",
      price:5.99,
    },
    {
      name: "Fried Turkey Wing (Peppered)",
      description: "Juicy turkey wings marinated in a spicy pepper sauce, fried to a crispy finish. A fiery kick in every flavorful bite.",
      image: "../images/food-img/dummy.jpg", 
      price:9.99,
    },
    {
      name: "Fried Turkey Tail",
      description: "Crispy fried turkey tail tossed in a bold, spicy sauce.",
      image: "../images/food-img/dummy.jpg",
      price:9.99,
    },
    {
      name: "Peppered Gizzard",
      description: "Tender chicken gizzards simmered in a rich, spicy pepper marinade. Bursting with bold flavor and perfect for spice lovers.",
      image: "../images/food-img/dummy.jpg",
      price:9.99,
    },
    {
      name: "Fried Chicken Suya Wings",
      description: "Crispy chicken wings rubbed in signature suya spice blend — smoky, spicy, and utterly addictive.",
      image: "../images/food-img/dummy.jpg",
      price:11.99,
    },
    {
      name: "Kelewele",
      description: "Golden fried plantain cubes tossed with ginger, chili, and fragrant West African spices. Sweet, spicy, and absolutely irresistible.",
      image: "../images/food-img/dummy.jpg",
      price:8,
    },
    {
      name: "Domedo (Fried Seasoned Pork)",
      description: "Succulent chunks of pork marinated in aromatic spices, then fried until perfectly crispy on the outside and juicy inside. A rich, flavorful dish that’s a celebration of bold seasoning and satisfying texture.",
      image: "../images/food-img/dummy.jpg",
      price:9.99,
    },
    {
      name: "Potato Balls (2) for",
      description: "Crispy on the outside, soft and savory inside — these golden potato balls are seasoned and fried to perfection. A deliciously comforting snack or side with a hint of spice in every bite.",
      image: "../images/food-img/dummy.jpg",
      price:10,
    },
    {
      name: "Chicken or Beef Wrap",
      description: "Tender, seasoned chicken or beef wrapped in warm flatbread with fresh vegetables and a touch of house sauce. A handheld meal that brings bold flavor and satisfying comfort in every bite.",
      image: "../images/food-img/dummy.jpg",
      price:"9.99 / $12.99",
    },
    {
      name: "Tofu/Beef /Chicken  Khebab",
      description: "Tender, marinated beef, chicken or tofu skewers grilled to perfection over an open flame, served with sautéed peppers and onions. Infused with bold spices and smoky flavor.",
      image: "../images/food-img/dummy.jpg",
      price:"9.99 / $12.99",
    },
    {
      name: "Bofrot (2) for",
      description: "Ghanaian fried, crunchy puff puff treat made with flour, sugar, milk and other ingredients molded into round balls",
      image: "../images/food-img/dummy.jpg",
      price:5,
    },
    {
      name: "Spicy Goat",
      description: "Spicy hot grilled/fried goat with peppers, onions, sauce and green peppers.",
      image: "../images/food-img/dummy.jpg",
      price:15,
    },
    {
      name: "Whole Fired Chicken (Local)",
      description: "Steamed and fired chicken (local) tossed in hot chilli pepper",
      image: "../images/food-img/dummy.jpg",
      price:18.99,
    },
  ];

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              On the Table
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto">
            Our meals are made fresh, and some dishes take 15 to 25 minutes to prepare. To skip the wait and enjoy the best experience, please call ahead to pre-order your favorites.
            </p>
            <div className="inline-block relative mt-4">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
              APPETIZERS
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {appetizerMenuItems.map((item, index) => (
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
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
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

export default FoodMenuListOne;