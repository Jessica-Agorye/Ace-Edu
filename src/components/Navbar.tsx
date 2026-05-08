import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Services", "Pricing", "FAQ", "Blog"];

  const getHref = (link: string) =>
    `#${link.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-5">
          <div
            className="mt-4 flex items-center justify-between
            bg-white/70 backdrop-blur-md
            border border-gray-200
            rounded-full
            px-5 py-2 shadow-sm"
          >
            {/* Logo */}
            <img
              src="/images/acelogo.png"
              alt="Logo"
              className="w-16 md:w-20 object-contain"
            />

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
                {links.map((link, index) => {
                  const isBlog = link === "Blog";
                  const isHome = link === "Home";

                  return (
                    <li key={index}>
                      {isBlog ? (
                        <Link
                          to="/blog"
                          className="hover:text-amber-500 transition"
                        >
                          {link}
                        </Link>
                      ) : isHome ? (
                        <Link
                          to="/"
                          className="hover:text-amber-500 transition"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href={getHref(link)}
                          className="hover:text-amber-500 transition"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <button className="px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-semibold hover:bg-amber-400 transition shadow-sm">
                WhatsApp
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-800"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] bg-white z-50 transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex justify-between items-center px-5 py-5 border-b border-gray-200">
          <img src="/images/acelogo.png" alt="Logo" className="w-20" />
          <button onClick={() => setMenuOpen(false)} className="text-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center mt-14">
          <ul className="flex flex-col gap-6 text-center">
            {links.map((link, index) => {
              const isBlog = link === "Blog";
              const isHome = link === "Home";

              return (
                <li key={index}>
                  {isBlog ? (
                    <Link
                      to="/blog"
                      onClick={() => setMenuOpen(false)}
                      className="text-lg text-gray-800 hover:text-amber-500 transition"
                    >
                      {link}
                    </Link>
                  ) : isHome ? (
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className="text-lg text-gray-800 hover:text-amber-500 transition"
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      href={getHref(link)}
                      onClick={() => setMenuOpen(false)}
                      className="text-lg text-gray-800 hover:text-amber-500 transition"
                    >
                      {link}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button className="mt-10 px-6 py-3 rounded-full bg-amber-500 text-white font-semibold">
            WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
