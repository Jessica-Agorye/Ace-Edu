import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">Ace Travel</h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Creating global opportunities for study, work, tourism, and
              unforgettable travel experiences.
            </p>

            <p className="text-gray-500 text-sm mt-6">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end gap-6">
            {/* Links */}
            <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
              <li className="hover:text-amber-400 cursor-pointer transition">
                Facebook
              </li>
              <li className="hover:text-amber-400 cursor-pointer transition">
                Instagram
              </li>
              <li className="hover:text-amber-400 cursor-pointer transition">
                Twitter
              </li>
            </ul>

            {/* CTA */}
            <Link
              to="/book-call"
              className="px-6 py-3 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-400 transition text-center"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          Built with care for global explorers ✈️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
