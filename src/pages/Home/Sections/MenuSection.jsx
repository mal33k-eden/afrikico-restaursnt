export default function MenuSection() {
  const menuItems = [
    {
      id: 1,
      name: " Jollof",
      description:
        "A flavorful West African rice dish cooked with tomatoes, peppers, and spices, offering a rich and spicy taste. Perfect as a hearty standalone meal.",
      image: "../images/food-img/img-7.jpg",
    },
    {
      id: 2,
      name: "Waakye",
      description:
        " A Ghanaian specialty of rice and beans cooked with millet leaves, served with meat stew, spicy sauce, and sides like gari or fried plantain.",
      image: "../images/food-img/img-12.jpg",
    },
    {
      id: 3,
      name: "Fried Rice",
      description:
        "A savory stir-fried rice dish with vegetables, soy sauce, and a choice of protein, delivering a satisfying and aromatic experience.",
      image: "../images/food-img/dummy.jpg",
    },
    {
      id: 4,
      name: "Okra Stew",
      description:
        "A traditional okra stew with a slimy texture, spiced and served with sides like banku or rice for an authentic taste.",
      image: "../images/food-img/dummy.jpg",
    },
    {
      id: 5,
      name: "Fufu with Goat Light Soup",
      description:
        "A hearty combination of Fufu and tender goat meat simmered in a rich, flavorful light soup. Served hot and perfect for sharing.",
      image: "../images/food-img/img-10.jpg",
    },
    {
      id: 6,
      name: "Peanut Soup",
      description:
        "A rich and creamy West African peanut soup with a hint of spice, often served with fufu or rice for a comforting meal.",
      image: "../images/food-img/img-1.jpg",
    },
    {
      id: 7,
      name: "Spinach Stew",
      description:
        "A nutritious stew made with fresh spinach, cooked with tomatoes and spices, ideal as a side or with a protein.",
      image: "../images/food-img/img-6.jpg",
    },
    {
      id: 8,
      name: "Tilapia",
      description:
        "A whole grilled or fried tilapia fish, seasoned with a spicy pepper sauce, offering a flavorful seafood experience.",
      image: "../images/food-img/img-2.jpg",
    },
  ];

  return (
    <section className="py-5 px-4 bg-[#F8F1ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4 ">
            <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
              OUR MENU
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Delicious <span className="text-orange-300">Menu</span> List
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                />
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-xl md:text-2xl font-bold text-gray-800 ml-4">
                    {/* $ {item.price} */}
                  </span>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
