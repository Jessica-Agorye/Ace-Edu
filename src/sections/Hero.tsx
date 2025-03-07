const Hero = () => {
  return (
    <section>
      <div className="  w-full md:grid md:grid-cols-2 gap-4 px-4 md:px-10">
        {/* Hero text section */}
        <div className=" relative mt-10 md:mt-30 flex flex-col justify-center items-center space-y-6">
          <img
            src="/images/arrow.png"
            alt="Travel"
            className="hidden md:block absolute w-full h-[30%] md:w-[40%] lg:w-[20%]  md:h-[30%] -top-20 object-cover"
          />
          <p className="text-3xl text-center font-semibold leading-10 max-w-lg">
            Explore the World Through Unique Experiences!
          </p>
          <p className="mt-4 text-center max-w-lg">
            Tailored experiences for work, learning, tourism, and adventure.
          </p>

          <div className="flex items-center justify-center">
            <button className="px-10 py-2 font-bold bg-amber-500 mt-10 rounded-3xl">
              Start your Journey Today!
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/travel3.jpg"
            alt="Travel"
            className="w-full md:w-[80%] h-[300px] md:h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
