import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Ace Travel</h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Creating global opportunities for study, work, tourism, and
              unforgettable travel experiences.
            </p>

            <p className="text-gray-500 text-sm mt-6">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end gap-6">
            {/* Links */}
            <ul className="flex gap-6 text-sm text-gray-400">
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

            {/* Optional CTA */}
            <Link
              to="/book-call"
              className="px-6 py-3 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-400 transition inline-block"
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
