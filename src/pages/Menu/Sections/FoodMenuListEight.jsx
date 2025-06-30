const FoodMenuListEight = () => {
    // kids menu
    const menuItems = [
        // {
          // id: 1,
          // name: "Beef/Chicken Burger with French Fries", 
          // description: " Comes with Beef/Chicken, tomatoes, onions, lettuce, pickles, cheese, mayonnaise, ketchup and fries.",
          // image: "../images/food-img/dummy.jpg",
          // price: 9.99,
        // },
        {
          id: 2,
          name: "French Fries with Fried Chicken", 
          description: "",
          image: "../images/food-img/dummy.jpg",
          price: 9.99,
        },
        {
          id: 3,
          name: "Spaghetti with Meatballs", 
          description: "",
          image: "../images/food-img/dummy.jpg",
          price: 9.99,
        },
        {
          id: 4,
          name: "Chicken Nuggets with Fries", 
          description: "",
          image: "../images/food-img/dummy.jpg",
          price: 9.99,
        },
      ];
      
    return (
      <>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block relative mt-4">
                <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                Kids Menu
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
                      <span className="text-xl md:text-2xl font-bold text-gray-800 flex-shrink-0">
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
      </>
    );
  };
  
  export default FoodMenuListEight;