import ImgOne from "../../../assets/food-img/img-1.jpg";
import ImgThree from "../../../assets/food-img/img-3.jpg";
import ImgSix from "../../../assets/food-img/img-6.jpg";
import ImgSeven from "../../../assets/food-img/img-7.jpg";
import ImgEight from "../../../assets/food-img/img-8.jpg";
import ImgNine from "../../../assets/food-img/img-9.jpg";
import ImgTen from "../../../assets/food-img/img-10.jpg";
import ImgEleven from "../../../assets/food-img/img-11.jpeg";
import ImgTwelve from "../../../assets/food-img/img-12.jpg";

const FoodMenuListSection = () => {
  const menuItems = [
    {
      id: 1,
      name: " Jollof",
      description:
        "A flavorful West African rice dish cooked with tomatoes, peppers, and spices, offering a rich and spicy taste. Perfect as a hearty standalone meal.",
      price: 20,
      image: ImgSeven,
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
      price: 22,
      image:
        "https://images.unsplash.com/photo-1664334997177-6ae654a62735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 4,
      name: "Okro",
      description:
        "A traditional okra stew with a slimy texture, spiced and served with sides like banku or rice for an authentic taste.",
      price:24,
      image:
        "https://media.istockphoto.com/id/1406317293/photo/nigerian-okra-okro-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=N-HrPylhHRHeCwvu5zyp0M1q3WSUFe0qyw_YN8mtRNs=",
    },
    {
      id: 5,
      name: "Fufu with Goat Light Soup",
      description:
        "A hearty combination of Fufu and tender goat meat simmered in a rich, flavorful light soup. Served hot and perfect for sharing.",
      price: 80,
      image:ImgThree,
    },
    {
      id: 6,
      name: "Peanut Soup",
      description:
        "A rich and creamy West African peanut soup with a hint of spice, often served with fufu or rice for a comforting meal.",
      price: 22,
      image: ImgOne,
    },
    {
      id: 7,
      name: "Spinach Stew",
      description:
        "A nutritious stew made with fresh spinach, cooked with tomatoes and spices, ideal as a side or with a protein.",
      price: 22,
      image:ImgSix,
    },
    {
      id: 8,
      name: "Tilapia",
      description:
        "A whole grilled or fried tilapia fish, seasoned with a spicy pepper sauce, offering a flavorful seafood experience.",
      price: 25,
      image: ImgTwelve
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
      name: "Beef & Chicken Suya",
      description: "Skewered and grilled to perfection, this traditional West African street food features tender beef and chicken infused with bold suya spices — a smoky, spicy blend that captures the heart of the culture.",
      price: "10.99 / $19.99",
      image: "https://img.freepik.com/free-photo/closeup-delicious-roasted-meat-with-vegetables-lights_181624-43643.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Meat & Fish Pie",
      description: "Flaky, buttery pastry stuffed with a savory mix of seasoned minced meat or fish. Each bite delivers the comfort and soul of home-cooked goodness.",
      price: "5.99 / $6.99",
      image: ImgEight,
    },
    {
      name: "Fried Turkey Wing (Peppered)",
      description: "Juicy turkey wings marinated in a spicy pepper sauce, fried to a crispy finish. A fiery kick in every flavorful bite.",
      price: 9.99,
      image: "https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741793.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740" ,
    },
    {
      name: "Fried Turkey Tail",
      description: "Crispy fried turkey tail tossed in a bold, spicy sauce inspired by traditional Isi Ewu flavors. Pair with yam for a hearty, satisfying dish.",
      price: "9.99 / $19.99",
      image: ImgTen,
    },
    {
        name: "Peppered Gizzard",
        description: "Tender chicken gizzards simmered in a rich, spicy pepper marinade. Bursting with bold flavor and perfect for spice lovers.",
      price: 9.99,
      image: ImgEleven,
    },
    {
        name: "Fried Chicken Suya Wings",
        description: "Crispy chicken wings rubbed in signature suya spice blend — smoky, spicy, and utterly addictive.",
      price: 10.99,
      image: ImgNine,
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
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {appetizerMenuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-5">
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

export default FoodMenuListSection;
