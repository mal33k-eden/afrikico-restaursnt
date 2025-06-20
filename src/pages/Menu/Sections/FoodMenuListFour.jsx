const FoodMenuListFour = () => {
  
    // salads
    const saladsMenuItems = [
      {
        name: "Mixed Salad - Half Size- $7.00 & Full Size -$10.00",
        description: "A vibrant medley of fresh lettuce, tomatoes, cucumbers, carrots, and onions, tossed with a light vinaigrette dressing. A crisp and colorful option to complement any meal.",
            image: "../images/food-img/dummy.jpg", 
            price:10,
      },
      {
        name: "Ghana Salad",
        description: "A hearty Ghanaian classic featuring a mix of lettuce, tomatoes, cucumbers, boiled eggs, tuna, baked beans, and a touch of mayonnaise. Packed with bold flavors and textures, this salad is a satisfying standalone dish or perfect side.",
          image: "../images/food-img/dummy.jpg",
        price:15,
      },
      {
        name: "Ceaser Salad",
        description: "Flaky, butterCrisp Romaine hearts tossed in a creamy house made ceaser dressing, topped with shaved parmesan and crunchy croutons",
        image: "../images/food-img/dummy.jpg",
        price:10,
      },
      {
        name: "Kale Salad",
        description: "Hearty and wholesome Kale with dried cranberries, Brussels sprouts, pumpkin seeds with poppy seed dressing.",
        image: "../images/food-img/dummy.jpg", 
        price:10,
      },
    ];
  
    return (
      <>
        <section className="py-5 px-4 bg-[#f4f4f4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block relative mb-4 ">
                <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                  Salad
                </div>
              </div>
              <p className="text-xl md:text-2xl lg:text-2xl text-gray-800 leading-tight">
              Salads pair with ( Chicken $6,  Shrimp $8)
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {saladsMenuItems.map((item, index) => (
                <div key={index} className="border-b-2 border-gray-200 pb-5">
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
  
  export default FoodMenuListFour;