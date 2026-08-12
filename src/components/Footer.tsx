import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/yourusername",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: FaTwitter,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h3 className="mb-3 text-2xl font-bold">Ace Travel</h3>

            <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-400 md:mx-0">
              Creating global opportunities for study, work, tourism, and
              unforgettable travel experiences.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <ul className="flex items-center justify-center gap-6 md:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name} page`}
                      className="text-gray-400 transition hover:text-amber-400"
                    >
                      <Icon size={22} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/book-call"
              className="rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-400"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          Built with care for global explorers ✈️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
