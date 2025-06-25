const FoodMenuListFive = () => {
  
    // lunch Special List
    const lunchMenuItems = [
      {
        name: "Jollof",
        description: "A flavorful West African rice dish cooked with tomatoes, peppers, and spices, offering a rich and spicy taste ( Chicken/ Lamb/ Fish)",
        image: "../images/food-img/img-7.jpg",
        price:18.89,
      },
      {
        name: "Waakye",
        description: "A Ghanaian specialty of rice and beans cooked with millet leaves, served with meat stew, spicy sauce, and sides like gari, spaghetti.",
          image: "../images/food-img/img-12.jpg",
          price:10,
      },
      {
        name: "Fried Rice",
        description: "A savory stir-fried rice dish with vegetables,  egg, soy sauce,  with chicken delivering a satisfying and aromatic experience.",
          image: "../images/food-img/dummy.jpg",
          price:18.99,
      },
      {
        name: "Banku/kenkey with Fried/Grilled Fish",
        description: "",
          image: "../images/food-img/dummy.jpg", 
          price:20,
      },
      {
        name: "Wrap of the Day (Chicken/Veggie/beef option)",
        description: "",
          image: "../images/food-img/dummy.jpg",
          price:15.99,
      },
      
    ];
  
    return (
      <>
  
        <section className="py-5 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block relative mb-4 ">
                <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                    Lunch special
                </div>
              </div>
              <p className="text-xl md:text-2xl lg:text-2xl text-gray-800 leading-tight">
              Lunch Special  Tuesday to Thursday  12pm – 2 pm
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {lunchMenuItems.map((item, index) => (
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
  
  export default FoodMenuListFive;