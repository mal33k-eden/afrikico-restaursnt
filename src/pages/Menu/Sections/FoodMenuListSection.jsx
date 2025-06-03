const FoodMenuListSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Spinach Stew Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "2.45",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001230-2.jpg",
    },
    {
      id: 2,
      name: "Lorem Ipsum Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "1.45",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001230-2.jpg",
    },
    {
      id: 3,
      name: "Spinach Stew Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "2.45",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001230-2.jpg",
    },
    {
      id: 4,
      name: "Lorem Ipsum Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "3.50",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001205-2.jpg",
    },
    {
      id: 5,
      name: "Lorem Ipsum Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "4.50",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001205-2.jpg",
    },
    {
      id: 6,
      name: "Spinach Stew Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "1.45",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001205-2.jpg",
    },
    {
      id: 7,
      name: "Lorem Ipsum Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "0.45",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001205-2.jpg",
    },
    {
      id: 8,
      name: "Spinach Stew Food",
      description:
        "Lorem Ipsum as their default model text, and a search for sites still in their infancy",
      price: "0.45",
      image:
        "https://elafrikcuisineandbar.com/wp-content/uploads/2024/03/P1001230-2.jpg",
    },
  ];
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          On the Table
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto">
          Here’s what’s cooking at Afrikico
          </p>
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
  );
};

export default FoodMenuListSection;
