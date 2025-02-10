const aboutUsText = [
  {
    img: "/images/book.png",
    title: "Education",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },

  {
    img: "/images/job.png",
    title: "Work",
    description:
      " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    img: "/images/travel.png",
    title: "Travel",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    img: "/images/tour.png",
    title: "Tourism",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
];

const AboutUs = () => {
  return (
    <section className="mt-20 mx-4 mb-2 lg:mx-20">
      <p className="text-6xl  font-semibold">Who are we?</p>
      <p className="text-xl lg:text-3xl mt-12  font-bold leading-10 pr-10  mb-10 bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        magna aliqua.
      </p>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-4">
        {aboutUsText.map((item, index) => (
          <div className="bg-green-50 text-black px-6 py-10 leading-8 ">
            <div key={index} className="flex">
              {item.img && (
                <img src={item.img} alt={item.title} className="w-15 h-15" />
              )}
              <h3 className="mt-10 text-xl md:text-2xl font-bold">
                {item.title}
              </h3>
            </div>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
