import ImgFour from "../../../assets/food-img/img-4.jpg";

const FoodGallerySection = () => {
  const allImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1665332195309-9d75071138f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Delicious pasta dish",
    },
    {
      id: 2,
      src: ImgFour,
      alt: "Grilled salmon",
    },
    {
      id: 3,
      src: "https://img.freepik.com/premium-photo/manchurian-hakka-schezwan-noodles-popular-indochinese-food-served-bowl-selective-focus_466689-34637.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
      alt: "Chocolate dessert",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1664717698774-84f62382613b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
      alt: "Fresh salad",
    },
    {
      id: 5,
      src: "https://img.freepik.com/premium-photo/assorted-traditional-african-dishes-with-jollof-rice-collard-greens-barbecued-meat-served_996993-8679.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
      alt: "Seafood platter",
    },
    {
      id: 6,
      src: "https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
      alt: "Steak with roasted potatoes",
    },
    {
      id: 7,
      src: "https://img.freepik.com/premium-photo/ebony-eats-extravaganza-black-food-photo_960396-307367.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
      alt: "Artisan cheese board",
    },
    {
      id: 8,
      src: "https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?ga=GA1.1.1683516360.1749035478&semt=ais_hybrid&w=740",
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
