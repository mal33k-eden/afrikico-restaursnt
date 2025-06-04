const FoodMenuListSection = () => {
  const menuItems = [
    {
      id: 1,
      name: " Jollof",
      description:
        "A flavorful West African rice dish cooked with tomatoes, peppers, and spices, offering a rich and spicy taste. Perfect as a hearty standalone meal.",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Sm9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Waakye",
      description:
        " A Ghanaian specialty of rice and beans cooked with millet leaves, served with stew, spicy sauce, and sides like gari or fried plantain.",
      price: 22,
      image:
        "https://images.unsplash.com/photo-1610592309005-0f92c8e39cec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2hhbmElMjBXYWFreWUlMjBmb29kfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Fried Rice",
      description:
        "A savory stir-fried rice dish with vegetables, soy sauce, and a choice of protein, delivering a satisfying and aromatic experience.",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1664334997177-6ae654a62735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 4,
      name: "Okro",
      description:
        "A traditional okra stew with a slimy texture, spiced and served with sides like banku or rice for an authentic taste.",
      price: 18,
      image:
        "https://media.istockphoto.com/id/1406317293/photo/nigerian-okra-okro-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=N-HrPylhHRHeCwvu5zyp0M1q3WSUFe0qyw_YN8mtRNs=",
    },
    {
      id: 5,
      name: "Plantain Soup",
      description:
        "A creamy and savory soup made with ripe plantains, blended with spices and vegetables, perfect for a light yet filling option.",
      price: 15,
      image:
        "https://img.freepik.com/free-photo/still-life-recipe-with-plantain-banana_23-2151023903.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
    },
    {
      id: 6,
      name: "Peanut Soup",
      description:
        "A rich and creamy West African peanut soup with a hint of spice, often served with fufu or rice for a comforting meal.",
      price: 20,
      image:
        "https://img.freepik.com/premium-photo/creamy-peanut-butter-with-nuts-isolated-white_183352-2706.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
    },
    {
      id: 7,
      name: "Spinach Stew",
      description:
        "A nutritious stew made with fresh spinach, cooked with tomatoes and spices, ideal as a side or with a protein.",
      price: 18,
      image:
        "https://img.freepik.com/free-photo/top-view-stewed-spinach-salad-with-carrot-wooden-table_140725-10405.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
    },
    {
      id: 8,
      name: "Tilapia",
      description:
        "A whole grilled or fried tilapia fish, seasoned with a spicy pepper sauce, offering a flavorful seafood experience.",
      price: 25,
      image:
        "https://img.freepik.com/premium-photo/close-up-grilled-fish-with-salad_1048944-3178380.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
    },
  ];
  // Appetizer List
  const appetizerMenuItems = [
    {
      name: "Spring Rolls (4 for $10)",
      description: "Crispy, golden pastry rolls filled with a vibrant medley of seasoned vegetables. A light, flavorful bite to start your meal off right.",
      price: 10,
      image: "https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
    },
    {
      name: "Beef & Chicken Suya ($10.99 | Combo $19.99)",
      description: "Skewered and grilled to perfection, this traditional West African street food features tender beef and chicken infused with bold suya spices — a smoky, spicy blend that captures the heart of the culture.",
      price: 10.99,
      image: "https://img.freepik.com/free-photo/closeup-delicious-roasted-meat-with-vegetables-lights_181624-43643.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Meat & Fish Pie ($5.99 / $6.99)",
      description: "Flaky, buttery pastry stuffed with a savory mix of seasoned minced meat or fish. Each bite delivers the comfort and soul of home-cooked goodness.",
      price: 5.99,
      image: "https://img.freepik.com/free-photo/pie-stainless-steel-bowl-beside-black-handled-knife_206566-8.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Fried Turkey Wing (Peppered)",
      description: "Juicy turkey wings marinated in a spicy pepper sauce, fried to a crispy finish. A fiery kick in every flavorful bite.",
      price: 9.99,
      image: "https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741793.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Fried Turkey Tail (Isi Ewu Style) ($9.99 | With Fried Yam $19.99)",
      description: "Crispy fried turkey tail tossed in a bold, spicy sauce inspired by traditional Isi Ewu flavors. Pair with yam for a hearty, satisfying dish.",
      price: 9.99,
      image: "https://img.freepik.com/free-photo/baked-chicken-drumsticks-honey-mustard-marinade_2829-7237.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
        name: "Peppered Gizzard",
        description: "Tender chicken gizzards simmered in a rich, spicy pepper marinade. Bursting with bold flavor and perfect for spice lovers.",
      price: 9.99,
      image: "https://img.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_140725-36040.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
        name: "Fried Chicken Suya Wings",
        description: "Crispy chicken wings rubbed in signature suya spice blend — smoky, spicy, and utterly addictive.",
      price: 10.99,
      image: "https://img.freepik.com/free-photo/closeup-shot-delicious-spiced-chicken-legs-with-french-fries-table_181624-46659.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Kelewele (Fried Plantains)",
      description: "Golden fried plantain cubes tossed with ginger, chili, and fragrant West African spices. Sweet, spicy, and absolutely irresistible.",
      price: 8,
      image: "https://img.freepik.com/free-photo/delicious-banana-studio-top-view_23-2150830504.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Domedo (Fried Seasoned Pork)",
      description: "Succulent chunks of pork marinated in aromatic spices, then fried until perfectly crispy on the outside and juicy inside. A rich, flavorful dish that’s a celebration of bold seasoning and satisfying texture.",
      price: 9.99,
      image: "https://img.freepik.com/free-photo/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table_181624-35847.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Potato Balls",
      description: "Crispy on the outside, soft and savory inside — these golden potato balls are seasoned and fried to perfection. A deliciously comforting snack or side with a hint of spice in every bite.",
      price: 10,
      image: "https://img.freepik.com/free-photo/delicious-fried-food-croquettes-arrangement_23-2149202643.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Chicken or Beef Wrap",
      description: "Tender, seasoned chicken or beef wrapped in warm flatbread with fresh vegetables and a touch of house sauce. A handheld meal that brings bold flavor and satisfying comfort in every bite.",
      price: 9.99,
      image: "https://img.freepik.com/free-photo/chicken-durum-shaurma-inside-lavash-with-french-fries-wooden-board_114579-65.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
  },
  ]
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              On the Table
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto">
              Here’s what’s cooking at Afrikico
            </p>
            <div className="inline-block relative mt-4">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                MENU
              </div>
            </div>
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
                      $ {item.price}
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

      <section className="py-5 px-4 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4 ">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                OUR MENU
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 leading-tight">
            APPETIZERS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {appetizerMenuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-5">
                <div className="flex justify-between items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                  />
                </div>

                  <div className="flex-1 pr-4">
                    <h3 className="text-xl md:text-1xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">
                      $ {item.price}
                    </span>
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

export default FoodMenuListSection;
