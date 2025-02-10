import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Services", "Pricing", "Programs"];

  // Handle toggle visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 md:place-items-center">
        <div>
          <img src="/images/acelogo.png" alt="Logo" className="w-[50%]" />
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-6 md:text-lg font-semibold">
            {links.map((link, index) => {
              return <li key={index}>{link}</li>;
            })}
          </ul>
        </div>

        <div className="hidden md:flex md:justify-self-center md:mt-0">
          <button className="px-8 py-2 rounded-full border border-gray-400 bg-green-300">
            Book a Call
          </button>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="flex justify-end mt-2 md:hidden" onClick={toggleMenu}>
          <img src="/images/hamburgermenu.png" alt="Menu" className="w-[50%]" />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`w-full h-[70%] bg-blue-200 text-black fixed top-0 left-0 right-0 z-50 md:hidden transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between mx-4 mt-4">
          <img src="/images/acelogo.png" alt="Logo" className="w-[30%]" />

          {/* Close Hamburger menu button */}
          <img
            src="/images/hamburgermenu.png"
            alt="Close Menu"
            onClick={toggleMenu}
            className="w-[30%]"
          />
        </div>

        <div className="mt-8">
          <ul className="flex flex-col items-center gap-6">
            {links.map((link, index) => {
              return <li key={index}>{link}</li>;
            })}
          </ul>
        </div>

        {/* Socials */}
        <div className="mt-14 flex gap-2 justify-center">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
