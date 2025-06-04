export default function MenuSection() {
    const menuItems = [
      {
        name: " Jollof",
        description: "A flavorful West African rice dish cooked with tomatoes, peppers, and spices, offering a rich and spicy taste. Perfect as a hearty standalone meal.",
        price: 20,
      },
      {
        name: "Waakye",
        description: " A Ghanaian specialty of rice and beans cooked with millet leaves, served with stew, spicy sauce, and sides like gari or fried plantain.",
        price: 22,
      },
      {
        name: "Fried Rice",
        description: "A savory stir-fried rice dish with vegetables, soy sauce, and a choice of protein, delivering a satisfying and aromatic experience.",
        price: 20,
      },
      {
        name: "Okro",
        description: "A traditional okra stew with a slimy texture, spiced and served with sides like banku or rice for an authentic taste.",
        price: 18,
      },
      {
        name: "Plantain Soup",
        description: "A creamy and savory soup made with ripe plantains, blended with spices and vegetables, perfect for a light yet filling option.",
        price: 15,
    },
    {
        name: "Peanut Soup",
        description: "A rich and creamy West African peanut soup with a hint of spice, often served with fufu or rice for a comforting meal.",
        price: 20,
    },
    {
        name: "Spinach Stew",
        description: "A nutritious stew made with fresh spinach, cooked with tomatoes and spices, ideal as a side or with a protein.",
        price: 18,
    },
    {
        name: "Tilapia",
        description: "A whole grilled or fried tilapia fish, seasoned with a spicy pepper sauce, offering a flavorful seafood experience.",
        price: 25,
        },
    ]
  
    return (
      <section className="py-5 px-4 bg-[#F8F1ED]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4 ">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                OUR MENU
              </div>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
             
            >
              Delicious <span className="text-orange-300">Menu</span>  List
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-5">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3
                      className="text-xl md:text-1xl font-bold text-gray-800 mb-2"
                    
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">$ {item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  