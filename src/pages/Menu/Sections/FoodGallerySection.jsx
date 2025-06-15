const FoodGallerySection = () => {
  const allImages = [
    {
      id: 1,
      src: "../images/food-img/img-1.jpg",
      alt: "Delicious pasta dish",
    },
    {
      id: 2,
      src: "../images/food-img/img-5.jpg",
      alt: "Grilled salmon",
    },
    {
      id: 3,
      src: "../images/food-img/img-14.jpg",
      alt: "Chocolate dessert",
    },
    {
      id: 4,
      src: "../images/food-img/img-2.jpg",
      alt: "Fresh salad",
    },
    {
      id: 5,
      src: "../images/food-img/img-6.jpg",
      alt: "Seafood platter",
    },
    {
      id: 6,
      src: "../images/food-img/img-17.jpg",
      alt: "Steak with roasted potatoes",
    },
    {
      id: 7,
      src: "../images/food-img/img-13.jpg",
      alt: "Artisan cheese board",
    },
    {
      id: 8,
      src: "../images/food-img/img-14.jpg",
      alt: "Handcrafted cocktail",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto ">
        <div className=" mx-auto px-4 mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2"
          >
            Our Food Gallery
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto">
          Good food looks as good as it tastes
          </p>
        </div>

        <div className="relative w-full">
          <div className="flex overflow-hidden rounded-md">
            <div className="flex animate-scroll rounded-md">
              {allImages.map((image) => (
                <div
                  key={`${image.id}-1`}
                  className="flex-shrink-0 px-2 w-72 sm:w-80 md:w-96"
                >
                  <div className="overflow-hidden rounded-lg shadow-md h-64 group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodGallerySection;
