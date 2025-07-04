const FoodMenuListThree = () => {
  // entrees
  const entreesMenuItems = [
    {
      name: "Jollof – Combo Platter",
      description:
        "A flavorful West African rice dish cooked with tomatoes, peppers, and spices, offering a rich and spicy taste ( Chicken/ Lamb/ Fish).",
      image: "../images/food-img/img-7.jpg",
      price: 20.99 ,
    },
    {
      name: "Waakye– Combo Platter",
      description:
        "A Ghanaian specialty of rice and beans cooked with millet leaves, served with meat stew, spicy sauce, and sides like gari , spaghetti.",
      image: "../images/food-img/img-12.jpg",
      price: 22.99,
    },
    {
      name: "Fried Rice",
      description:
        "A savory stir-fried rice dish with vegetables,  egg, soy sauce,  with chicken delivering a satisfying and aromatic experience.",
      image: "../images/food-img/dummy.jpg",
      price: 22,
    },
    {
      name: "Afrikico Combination Fried Rice",
      description:
        "A savory stir-fried rice dish with vegetables,  egg, shrimp and chicken  soy sauce, and a choice of protein, delivering a satisfying and aromatic experience.",
      image: "../images/food-img/dummy.jpg",
      price: 23,
    },
    {
      name: "Fufu & Goat/Fish Light Soup",
      description: "",
      image: "../images/food-img/dummy.jpg",
      price: 19.99,
    },
    {
      name: "Okro Stew",
      description:
        "A traditional okra stew with a slimy texture, spiced and served with sides like Banku or Rice for an authentic taste. Includes Goat meat, Shrimp and Crocker Fish.",
      image: "../images/food-img/dummy.jpg",
      price: 22,
    },
    {
      name: "Peanut Soup",
      description:
        "A rich and creamy West African peanut soup with a hint of spice, often served with fufu or rice balls for a comforting meal. Includes Chicken.",
      image: "../images/food-img/img-1.jpg",
      price: 22,
    },
    {
      name: "Egusi Soup",
      description:
          "A rich and creamy West African peanut soup with a hint of spice, often served with fufu or rice balls for a comforting meal. Includes Chicken.",
      image: "../images/food-img/dummy.jpg",
      price: 19.99,
    },
    {
      name: "Spinach Stew",
      description:
        "A nutritious stew made with fresh spinach, cooked with tomatoes and spices, ideal as a side or with a protein.  Served with White Rice/ Yam/ Plantain / Eba. Includes  Fish/ Goat/ Egg",
      image: "../images/food-img/img-6.jpg",
      price: 22,
    },
    {
      name: "Grilled Tilapia",
      description:
        "A whole grilled or fried tilapia fish, seasoned with a spicy pepper sauce, offering a flavorful seafood experience. Served with Banku/ Acheke / Kenkey.",
      image: "../images/food-img/img-2.jpg",
      price: 30,
    },
    {
      name: "Afrikico Platter",
      description:
        "A generous serving of your lamb, chicken, shrimp, and fish, paired with authentic Jollof rice and Waakye. Served with a side of our rich, flavorful tomato stew, perfectly seasoned to complement every bite. Ideal for sharing, this hearty platter with 2-3 people.",
      image: "../images/food-img/dummy.jpg",
      price: 80,
    },
    {
      name: "Protein Platter",
      description:
        "Pick 4 choices of protein  ( Choice of your lamb, chicken, shrimp, and fish, pork)  paired with fried potatoes / cassava/ plantain Served with a side of our rich, green pepper sauce, perfectly seasoned to complement every bite. Ideal for sharing, this hearty platter with 3 people.",
      image: "../images/food-img/dummy.jpg",
      price: 80,
    },
    {
      name: "Fried Yam & Chofi",
      description: "",
      image: "../images/food-img/dummy.jpg",
      price: 21,
    },
    {
      name: "Grilled/ Fried Fish (Crocker, Red Snapper, Mackerel, Salmon)",
      description:
        "Choice of grilled or crispy fried whole fish, perfectly seasoned and cooked to golden perfection. Served with your choice of Attiéké (cassava couscous), Gari foto, Kenkey, or crispy French fries, and accompanied by a side of spicy pepper sauce or savory tomato stew for a bold West African kick.",
      image: "../images/food-img/dummy.jpg",
      price: "22.00 - $30",
    },
    {
      name: "Pig Feet Stew and Rice",
      description:
        "Tender pig feet simmered in a rich, seasoned stew and served over fluffy white rice.",
      image: "../images/food-img/dummy.jpg",
      price: 22,
    },
    {
      name: "KONTOMIRE (Spinach Stew) with any side dish",
      description: " ",
      image: "../images/food-img/img-17.jpg",
      price:25,
    },
    {
      name: "Beans Stew (Red Red)",
      description: "A rich bean Stew cooked with spices and served with fried plantain, offering a comfortcomfort comforting and filling",
      image: "../images/food-img/dummy.jpg",
      price:20,
    },
    {
      name: "Curry Chicken",
      description: " ",
      image: "../images/food-img/dummy.jpg",
      price:22,
    },
    {
      name: "Curry Goat",
      description: " ",
      image: "../images/food-img/dummy.jpg",
      price:23.99,
    },
    {
      name: "Oxtail",
      description: " ",
      image: "../images/food-img/dummy.jpg",
      price:28.99,
    },
    // {
    //   name: "Pig Feet Stew",
    //   description:
    //     "Slow-cooked delicacy made with tender pig feet simmered in a deeply seasoned, tomato sauce Infused with herbs, spices, and a hint of heat.  Served with white rice.",
    //   image: "../images/food-img/dummy.jpg",
    //   price: 18,
    // },
    // {
    //   name: "Beans Stew with Fried  Plantain( Red Red)",
    //   description:
    //     "Black Eyed peas cooked in palm  oil served with fish ( Salmon)  and fried plantain.",
    //   image: "../images/food-img/dummy.jpg",
    //   price: 18,
    // },
    // {
    //   name: "Afrikico Oxtail Stew",
    //   description:
    //     "Oxtail simmered in a rich, savory tomato gravy with hearty vegetables and traditional island herbs. Served over fluffy white rice or rice and peas.",
    //   image: "../images/food-img/dummy.jpg",
    //   price: 28,
    // },
    // {
    //   name: "Jerk Chicken",
    //   description:
    //     "Tender chicken marinated in authentic jerk seasoning, grilled to perfection. Served with your choice of rice and peas or white rice, and accompanied by a side of sweet plantains or seasonal vegetables.",
    //   image: "../images/food-img/dummy.jpg",
    //   price: 15,
    // },
    // {
    //   name: "Fried Yam and Chofi",
    //   description:
    //     "Fried turkey tail and fired yam served with Shito and fresh tomatoes pepper.",
    //   image: "../images/food-img/dummy.jpg",
    //   price: 20,
    // },
    // {
    //   name: "Light (peppered)Soup",
    //   description:
    //     "A bold and zesty soup crafted with a rich blend of ripe tomatoes, hot peppers, and savory spices. Simmered to perfection with aromatic herbs and your choice of tender Goat meat or Fish. Served with Fufu or  Plain white rice",
    //   image: "../images/food-img/dummy.jpg",
    //   price: 25,
    // },
  ];

  return (
    <>
      <section className="py-5 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4 ">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                Entree
              </div>
            </div>
            {/* <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 leading-tight">
              entreesS
              </h2> */}
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {entreesMenuItems.map((item, index) => (
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

export default FoodMenuListThree;
