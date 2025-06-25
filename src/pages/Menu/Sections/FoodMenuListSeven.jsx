const FoodMenuListSeven = () => {
    // non-alholic
    const menuItems = [
      {
        id: 1,
        name: " Ginger Drink",
        description:
          "A refreshing house-made ginger drink, lightly sweetened with a mild spice, perfect for a cooling sip.",
          image: "../images/food-img/dummy.jpg",
        price:4,
      },
      {
        id: 2,
        name: "Iced Tea",
        description:
          "A chilled, classic iced tea with a hint of lemon, offering a light and crisp beverage option.",
          image: "../images/food-img/dummy.jpg",
          price:4,
      },
      {
        id: 3,
        name: "Coke",
        description:
          "A classic Coca-Cola, served ice-cold for a bubbly and refreshing experience.",
          image: "../images/food-img/dummy.jpg",
          price:4,
      },
      {
        id: 4,
        name: "Lemonade",
        description:
          "Freshly made lemonade with a perfect balance of tart and sweet, ideal for a hot day.",
          image: "../images/food-img/dummy.jpg",
          price:4,
      },
      {
        id: 5,
        name: "Fanta",
        description:
          "A bright and fruity Fanta soda, served chilled for a fun and refreshing drink.",
          image: "../images/food-img/dummy.jpg",
          price:4,
      },
      {
        id: 6,
        name: "Sprite",
        description:
          "A crisp and lemon-lime flavored Sprite, perfect for a light and bubbly refreshment.",
          image: "../images/food-img/dummy.jpg",
          price:4,
      },
      {
        id: 7,
        name: "Malt",
        description:
          "A non-alcoholic malt beverage with a rich, slightly sweet flavor, popular in African cuisine for its unique taste.",
          image: "../images/food-img/dummy.jpg",
          price:4.5,
      },
      {
        id: 9,
        name: "Bottle Water",
        description:
          "",
          image: "../images/food-img/dummy.jpg",
          price:3,
      },
    ];
  
    return (
      <>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block relative mt-4">
                <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                DRINKS
                </div>
              </div>
            </div>
  
            <div className="grid md:grid-cols-3 gap-x-16 gap-y-12">
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
                      {/* {item.description} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default FoodMenuListSeven;