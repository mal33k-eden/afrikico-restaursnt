const FoodMenuListTwo = () => {

  
    // Side Orders
    const sideMenuItems = [
      {
        name: "Fried Plantain",
        description: "Sweet, ripe plantains sliced and fried to golden perfection — a comforting favorite with just the right touch of crisp and caramelized sweetness.",
        image: "../images/food-img/dummy.jpg", 
        price:10,
      },
      {
        name: "Fried Yam",
        description: "Thick-cut yam pieces fried until crispy on the outside and tender inside. Perfect for dipping or enjoying on their own.",
        image: "../images/food-img/dummy.jpg",
        price:8,
      },
      {
        name: "French Fries",
        description: "Crispy, golden fries — classic, simple, and satisfying.",
        image: "../images/food-img/dummy.jpg",
        price:5.99,
      },
      {
        name: "Jollof Rice",
        description: "A beloved West African dish made with fragrant rice simmered in a rich tomato-based sauce with spices. Flavorful, vibrant, and unforgettable.",
        image: "../images/food-img/img-7.jpg", 
        price:8,
      },
      {
        name: "Kenkey",
        description: "A traditional fermented corn dough dish from Ghana, steamed in corn husks for a slightly tangy flavor — perfect with pepper sauce and fried fish.",
          image: "../images/food-img/dummy.jpg",
          price:4,
      },
      {
          name: "White Rice",
          description: "Fluffy, steamed white rice — a simple and versatile companion to any main dish.",
          image: "../images/food-img/dummy.jpg",
          price:5,
      },
      {
          name: "Banku",
          description: "A fermented mix of corn and cassava dough, cooked into a smooth, stretchy texture. Typically served with soup, stew, or grilled protein.",
          image: "../images/food-img/dummy.jpg",
          price:4,
      },
      {
        name: "Omo Tuo",
        description: "Soft rice balls made from mashed white rice, traditionally served with rich, hearty soups like groundnut or palm nut soup.",
          image: "../images/food-img/dummy.jpg",
          price:5,
      },
      {
        name: "Waakye",
        description: "A popular Ghanaian dish made from rice and black-eyed beans, often cooked with millet leaves for its signature color and aroma.",
          image: "../images/food-img/img-12.jpg",
          price:7,
      },
      {
        name: "Fufu",
        description: "A soft, dough-like staple made from cassava and plantains, pounded to a stretchy texture. Best enjoyed with thick, flavorful soups.",
          image: "../images/food-img/dummy.jpg",
          price:5,
        },
        {
        name: "Eba",
        description: "A Nigerian staple made from Gari (cassava flakes), stirred into hot water until firm. Enjoyed with soups like egusi, ogbono, or okra.",
            image: "../images/food-img/img-17.jpg",
            price:5,
        },
    ];
  
    return (
      <>
        <section className="py-5 px-4 bg-[#f4f4f4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block relative mb-4 ">
                <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                Side Orders
                </div>
              </div>
              {/* <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 leading-tight">
              Side Orders
              </h2> */}
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {sideMenuItems.map((item, index) => (
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
  
  export default FoodMenuListTwo;