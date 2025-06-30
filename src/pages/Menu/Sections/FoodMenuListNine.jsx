const FoodMenuListNine = () => {
    // vegan dishs
    const menuItems = [
        {
          id: 1,
          name: "Raw Vegan Greek Salad",
          description:
            "With cashew feta, tomato, cucumber and romaine.",
          image: "../images/food-img/dummy.jpg",
          price: 4,
        },
        {
          id: 2,
          name: "Vegetarian Italian Chopped Salad",
          description:
            "Chopped romaine lettuce, radicchio, red onion, celery, and cherry tomatoes.",
          image: "../images/food-img/dummy.jpg",
          price: 4,
        },
        {
          id: 3,
          name: "Vegan Fried Rice",
          description:
            "With vegetables, crispy baked / fried tofu, brown rice, garlic, chopped green onion, peas.",
          image: "../images/food-img/dummy.jpg",
          price: 4,
        },
        {
          id: 4,
          name: "Tofu Sandwich",
          description:
            "With BBQ tofu (BBQ sauce) / regular baked/ fried tofu, regular hamburger, vegan mayonnaise / mayonnaise, cabbage salad or vegan coleslaw.",
          image: "../images/food-img/dummy.jpg",
          price: 4,
        },
        {
          id: 5,
          name: "Tofu Kebab",
          description:
            "With grilled/ baked tofu, sauce and vegetables.",
          image: "../images/food-img/dummy.jpg",
          price: 4,
        },

      ];      
  
    return (
      <>
        <section className="py-16 px-4 bg-[#f4f4f4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block relative mt-4">
                <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                Vegan Dishes
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
      </>
    );
  };
  
  export default FoodMenuListNine;