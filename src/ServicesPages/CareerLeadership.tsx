export default function CareerLeadership() {
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
              We offer a wide array of career coaching, career development
              courses, executive and leadership growth programs…
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
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                The first step to achieving a professional manifesto is to ask
                yourself – What is my dream job?
              </h2>
              <p className="text-gray-600 leading-8">
                There are several individuals that find it very hard to say what
                exactly they want to do with their lives and this is why we
                encourage you to start off by asking yourself what you want as
                this would help you discover whether or not you have a want or
                you are just moving with the tide. When you’ve declared your
                dream Job – and make it public the next step is to ensure that
                you work towards getting this dream job, and so you ask yourself
                –
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Have I been working towards my dream job?
              </h2>
              <p className="text-gray-600 leading-8">
                This is the next question one should ask him/herself because
                this would propel you to declare the next phase of your career
                part.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <p>
            We love the term professional manifesto because the word “Manifesto”
            is a public declaration of aims although made by a political party
            or candidate we believe that a young professional or about-to-be
            professional gains a lot by declaring his or her career intension.
            You must understand that you are the candidate and captain of your
            life therefore to achieve the success you must declare your
            intentions, objectives and motives.{" "}
          </p>

          <p>
            How do you do this you ask; well here are simple strategies for
            building a successful professional but remember they can only be
            useful if you check yourself every now and then.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <p>
              Achievement and advancement are the results of setting firm
              resolutions and gaining will-power. As a young professional you
              ought to be committed to:
            </p>
            <ol className="list-disc pl-5 space-y-4 text-gray-600">
              <li>
                {" "}
                Identifying your goals and what route your career would take.
              </li>
              <li>
                Building your brand – this is not just for celebrities you must
                maintain an image that is not only attractive but one that sets
                you apart.
              </li>
              <li>
                {" "}
                Knowing your strengths and using them to your advantage is
                another thing you have to be committed to because we are humans
                with a lot of weaknesses and building on our strengths would
                help us break down walls.
              </li>
              <li>
                While you are trying to build your strength and become more
                attractive, it is easy to lose sight of yourself. Remember to
                take charge of your life because you are the only one with full
                control and responsibility.
              </li>
              <li>
                {" "}
                In being responsible and taking charge you would have to network
                a lot. Networking is an important tool as it helps you to have
                an archive of information and necessary contact that can impact
                your life and career one way or another.
              </li>
              <li>
                You must remember that everything about your career is important
                – therefore, you must read, study and learn everything there is
                to know about the path you are walking. To help you further, you
                can seek a career mentor that could advise you and point you the
                way in terms of skills acquisition, knowledge and competence.
                Also, remember to set career goals, have a purpose, have
                confidence and stay tough.
              </li>
            </ol>

            <p>
              No man is an island they say – If you need help, suggestions etc…
              about your plans for your professional career part do not hesitate
              to see us a message.
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
