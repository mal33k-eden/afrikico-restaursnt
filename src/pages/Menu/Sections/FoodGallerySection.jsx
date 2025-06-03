const FoodGallerySection = () => {
  const allImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1635360065676-f47200966893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFmcmljYW4lMjBmb29kJTIwYWJvdXR8ZW58MHx8MHx8fDA%3D",
      alt: "Delicious pasta dish with fresh herbs",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1628521061262-19b5cdb7eee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEFmcmljYW4lMjBmb29kJTIwYWJvdXR8ZW58MHx8MHx8fDA%3D",
      alt: "Grilled salmon with vegetables",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1653981608672-aea09b857b20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEFmcmljYW4lMjBmb29kJTIwYWJvdXR8ZW58MHx8MHx8fDA%3D",
      alt: "Chocolate dessert with berries",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1680529671259-240268d96c4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFmcmljYW4lMjBmb29kJTIwYWJvdXR8ZW58MHx8MHx8fDA%3D",
      alt: "Fresh salad with avocado",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1702827496401-216be3f435d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFmcmljYW4lMjBmb29kJTIwYWJvdXR8ZW58MHx8MHx8fDA%3D",
      alt: "Seafood platter with oysters",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1712565043059-cd19ff8394cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFmcmljYW4lMjBmb29kJTIwYWJvdXR8ZW58MHx8MHx8fDA%3D",
      alt: "Steak with roasted potatoes",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1647998270792-69ac80570183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMGZvb2QlMjBhYm91dHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Artisan cheese board",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWZyaWNhbiUyMGZvb2QlMjBhYm91dHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Handcrafted cocktail",
    },
  ];

  return (
    <section className="py-16 bg-[#f6f4f4] overflow-hidden">
      <div className="container max-w-7xl mx-auto ">
        <div className=" mx-auto px-4 mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2"
          >
            Our Food Gallery
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto">
            Feast your eyes on our culinary creations. Each dish is crafted with
            passion and the finest ingredients.
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
