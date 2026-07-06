export default function CareerLeadership() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] bg-[url('/images/travel1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-5">
          <div className="w-full max-w-4xl text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Premium Consulting
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 mb-8">
              We offer a wide array of career coaching, career development
              courses, executive and leadership growth programs designed to help
              individuals and organizations reach their full potential.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-6 sm:px-8 py-3 rounded-lg font-semibold">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-16 md:py-20 space-y-20 md:space-y-24">
        {/* About */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                The first step to achieving a professional manifesto is to ask
                yourself – What is my dream job?
              </h2>

              <p className="max-w-3xl text-base leading-7 text-gray-600">
                There are several individuals that find it very hard to say what
                exactly they want to do with their lives, which is why we
                encourage you to begin by asking yourself what you truly want.
                Doing so helps you discover whether you genuinely have a career
                goal or are simply moving with the tide. Once you've declared
                your dream job—and made it public—the next step is ensuring that
                every action you take moves you closer to achieving it.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                Have I been working towards my dream job?
              </h2>

              <p className="max-w-3xl text-base leading-7 text-gray-600">
                This is the next question everyone should ask themselves because
                it helps evaluate progress and determines the next phase of
                their professional journey.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-8">
          <p className="max-w-5xl text-base leading-8 text-gray-600">
            We love the term <strong>Professional Manifesto</strong> because a
            manifesto is a public declaration of aims and intentions. While the
            word is often associated with politics, we believe every aspiring
            professional benefits from clearly declaring their career vision.
            You are the captain of your own life, and achieving success begins
            with defining your objectives, intentions, and purpose.
          </p>

          <p className="max-w-5xl text-base leading-8 text-gray-600">
            So, how do you build a successful professional career? Here are a
            few practical strategies that can guide you along the way.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-base leading-8 text-gray-600 border-l-4 border-blue-600 pl-6">
                Achievement and career advancement come from setting clear goals
                and developing the discipline to pursue them. Every young
                professional should be committed to:
              </p>

              <ol className="list-decimal pl-6 space-y-5 text-gray-600 leading-8">
                <li>
                  Identifying your career goals and defining the direction you
                  want your career to take.
                </li>

                <li>
                  Building your personal brand by maintaining a professional
                  image that makes you memorable and sets you apart.
                </li>

                <li>
                  Understanding your strengths and using them to your advantage
                  while continually improving your weaknesses.
                </li>

                <li>
                  Taking responsibility for your own growth and remaining in
                  control of the decisions that shape your future.
                </li>

                <li>
                  Networking intentionally to build meaningful relationships,
                  gain valuable information, and create opportunities.
                </li>

                <li>
                  Continuously learning by reading, studying, developing new
                  skills, finding mentors, setting career goals, staying
                  confident, and remaining resilient throughout your journey.
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-8 text-gray-600 border-l-4 border-blue-600 pl-6">
                No one succeeds alone. If you need guidance, career advice, or
                professional support, we're here to help. Reach out to us and
                let's discuss the next steps toward achieving your career goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Career & Leadership Services We Offer
          </h2>

          <p className="max-w-2xl mx-auto text-base leading-7 text-gray-600">
            We provide personalized coaching, leadership development, executive
            mentoring, and professional growth solutions tailored to your career
            aspirations.
          </p>

          {/* Add your service cards here */}
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-2xl text-white text-center py-12 sm:py-16 px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready To Take The Next Step?
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 mb-8">
            Let our experienced consultants help you unlock your potential,
            build your leadership skills, and create a successful career path.
          </p>

          <button className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300 px-6 sm:px-8 py-3 rounded-lg font-semibold">
            Contact Us Today
          </button>
        </section>
      </div>
    </main>
  );
}
