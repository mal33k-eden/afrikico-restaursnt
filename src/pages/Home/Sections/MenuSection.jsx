export default function MenuSection() {
    const menuItems = [
      {
        name: "Zongo Waayke",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
      },
      {
        name: "Spinach Stew",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
      },
      {
        name: "Fried Croacker Fish and Peppersauce",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
      },
      {
        name: "Grilled Tilapia and Peppersauce",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
      },
      {
        name: "Wild Mushroom Aran Food",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
    },
    {
        name: "Red Red and Fried Plaintains",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
    },
    {
        name: "Red Red and Fried Plaintains",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
    },
    {
        name: "Red Red and Fried Plaintains",
        description: "Lorem Ipsum as their default model text infancy",
        price: 30,
        },
    ]
  
    return (
      <section className="py-5 px-4 bg-[#F8F1ED]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4 ">
              <div className="bg-primary-orange text-white px-6 py-3 text-sm font-bold tracking-wider uppercase relative">
                OUR MENU
              </div>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
             
            >
              Delicious <span className="text-orange-300">Menu</span>  List
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-5">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3
                      className="text-xl md:text-1xl font-bold text-gray-800 mb-2"
                    
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">$ {item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  