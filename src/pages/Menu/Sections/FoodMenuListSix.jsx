const FoodMenuListSix = () => {
  
    // Weekend specials
    const specialsMenuItems = [
      {
        name: "Fufu with Goat Light Soup",
        description: "",
            image: "../images/food-img/dummy.jpg",
        price:25,
      },
      {
        name: "Palm Soup with Rice Balls",
        description: "A rich, earthy soup made from palm nut extract, slow-cooked with meats and spices — served with soft, smooth rice balls to soak up every drop.",
        image: "../images/food-img/img-14.jpg",
        price:25,
      },
      {
        name: "Peanut Soup with Kokonte",
        description: "Creamy and spicy groundnut soup paired with kokonte (dried cassava dough), delivering deep flavor and a truly traditional experience.",
        image: "../images/food-img/img-1.jpg",
          price:25,
      },
      {
        name: "Tuo Zaafi (TZ)",
        description: "A staple from northern Ghana, TZ is served with a savory green soup and ayoyo (jute leaves), offering a perfect balance of texture and nutrition.",
          image: "../images/food-img/dummy.jpg",
          price:25,
      },
      {
        name: "Banku with Tilapia (pre-order)",
        description: "Smooth, tangy banku paired with flavorful crabs in a rich, peppery sauce — a dish full of bold coastal flair.",
          image: "../images/food-img/dummy.jpg", 
          price:28,
      },
      {
        name: "Aprepesah (pre-order)",
        description: "A traditional Ghanaian delicacy made from roasted corn powder cooked in palm nut soup",
          image: "../images/food-img/dummy.jpg",
          price:25,
      },
      
    ];
  
    return (
      <>
  
        <section className="py-5 px-4 bg-[#f4f4f4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block relative mb-4 ">
                <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                  Weekend Specials
                </div>
              </div>
              {/* <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 leading-tight">
              specialsS
              </h2> */}
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {specialsMenuItems.map((item, index) => (
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
  
  export default FoodMenuListSix;