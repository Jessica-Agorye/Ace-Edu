const pricingPlans = [
  {
    image: "",
    title: "Admission Facilitation",
    description: [
      "Lorem ipsum",
      "Another bullet point",
      "Yet another point",
      "Lorem ipsum",
    ],
    price: "$100",
  },
  {
    image: "",
    title: "Tourist Visa Facilitation",
    description: ["Lorem ipsum", "Another bullet point", "Yet another point"],
    price: "$200",
  },
  {
    image: "",
    title: "Permanent Visa Facilitation",
    description: ["Lorem ipsum", "Another bullet point", "Yet another point"],
    price: "$300",
  },
  {
    image: "",
    title: "Work Visa Facilitation",
    description: [
      "Lorem ipsum",
      "Another bullet point",
      "Yet another point",
      "Lorem ipsum",
    ],
    price: "$150",
  },
];

const Pricing = () => {
  return (
    <div className="p-4 md:mx-4 lg:mx-15 ">
      <p className="text-4xl font-semibold">Pricing Plans</p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-green-300 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col transition-colors duration-500 hover:border-purple-300"
          >
            <h3 className="text-2xl font-semibold mb-4 ">{item.title}</h3>
            <ul className="list-inside list-disc mb-6">
              {item.description && item.description.length > 0 ? (
                item.description.map((desc, i) => (
                  <li key={i} className="text-gray-700 mb-2">
                    {desc}
                  </li>
                ))
              ) : (
                <li>No description available</li>
              )}
            </ul>
            <div className="text-xl font-semibold text-center mb-6">
              {item.price}
            </div>
            <button className="bg-amber-500 px-4 p-2 text-white rounded-full hover:bg-amber-600 transition duration-300 w-32 mx-auto">
              Register Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
