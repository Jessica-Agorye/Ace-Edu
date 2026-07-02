export default function PremiumConsulting() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] bg-[url('images/travel1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="max-w-3xl text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Consulting
            </h1>

            <p className="text-lg leading-8 mb-8">
              Explore the world with confidence. We help individuals, families,
              and businesses plan memorable trips with ease.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 space-y-24">
        {/* About */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            Discover The World With Ease
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-gray-600 leading-8">
              ACE is an Education and Travel consultancy business registered
              with the Corporate Affairs Commission (CAC). At Ace, you get to
              discover why you should study abroad, where to study and how to
              process your admission and visa. Our services include full
              professional support to those interested in studying and living
              abroad. Our professional support covers countries in Europe,
              America, Asia and Australia.
            </p>

            <p className="text-gray-600 leading-8">
              Staff experience is top-notch and they are available to provide
              you with the best service that would enable you to realize your
              dreams. Ace Consult also offers special benefits
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Vision</h2>

          <p>
            Creating the Full Realization of the potential of education in
            helping to drive a new era of productivity, development and growth
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="list-disc pl-5 space-y-4 text-gray-600">
              <li>Accountability</li>
              <li>Quality Service</li>
              <li>Independent Thinking</li>
              <li>Win-Win Partnership</li>
              <li>Creativity and Innovation</li>
            </ul>
          </div>
        </section>

        {/* More Information */}
        <section>
          <div>
            <h2 className="text-3xl font-bold mb-8">Mission</h2>

            <p className="text-gray-600 leading-8">
              To be a knowledge powerhouse providing service that fuels and
              enables educational curiosity and the experience of travel.
            </p>
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            Travel & Tour Services We Offer
          </h2>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-2xl text-white text-center py-16 px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready For Your Next Adventure?
          </h2>

          <p className="max-w-2xl mx-auto mb-8">
            Let us help you plan a seamless and memorable travel experience.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
            Contact Us Today
          </button>
        </section>
      </div>
    </main>
  );
}
