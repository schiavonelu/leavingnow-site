import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaCalendar,
  FaGift,
  FaPlaneDeparture,
} from "react-icons/fa";

import logo from "../../assets/logo/leavingnow-logo.webp";
import logoWhite from "../../assets/logo/leavingnow-logowhite.webp";

const links = [
  { to: "/", label: "Home", end: true, icon: FaHome },
  { to: "/chi-siamo", label: "Chi siamo", icon: FaInfoCircle },
  { to: "viaggi-di-nozze", label: "Viaggi di Nozze", icon: FaPlaneDeparture },
  { to: "idee-regalo", label: "Idee Regalo", icon: FaGift },
  { to: "/contatti", label: "Contatti", icon: FaEnvelopeOpenText },
];

const PHONE_DISPLAY = "081 18754553";
const PHONE_TEL = "+3908118754553";
const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const FACEBOOK_URL = "https://www.facebook.com/leavingnowviaggi/";
const INSTAGRAM_URL = "https://www.instagram.com/leavingnow_viaggi/";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const isOnHero = !scrolled && !open;

  const headerClasses = isOnHero
    ? "bg-transparent border-b border-white/25"
    : "bg-white/95 backdrop-blur shadow-sm border-b border-[#E2E8F0]/70";

  const baseTextDesktop = isOnHero ? "text-white" : "text-[#132C50]";
  const burgerColor = isOnHero ? "text-white" : "text-[#132C50]";
  const navLinkBase =
    "relative text-sm font-medium transition-colors duration-200";

  const socialBaseClasses = isOnHero
    ? "text-white border-white/70"
    : "text-slate-700 border-[#718093]/40";

  const currentLogo = isOnHero ? logoWhite : logo;
  // dimensioni fisse per evitare “zoom”
  const logoSizeClasses = "h-11 w-[220px] object-contain";

  const callLabelColor = isOnHero ? "text-white/80" : "text-slate-700";
  const callNumberColor = isOnHero ? "text-white" : "text-[#132C50]";

  const comboWrapperClasses = isOnHero
    ? "inline-flex items-stretch rounded-full border border-white/60 bg-white/15 text-white shadow-md backdrop-blur-md transition-all"
    : "inline-flex items-stretch rounded-full border border-[#E5E7EB] bg-white/90 text-[#132C50] shadow-sm transition-all";

  const appointmentSeparatorBorder = isOnHero
    ? "border-white/40"
    : "border-[#E5E7EB]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerClasses}`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img
              src={currentLogo}
              alt="Leaving Now"
              className={`${logoSizeClasses} drop-shadow-sm`}
              style={{ imageRendering: "auto" }}
            />
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex gap-4 lg:gap-6">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      [
                        navLinkBase,
                        baseTextDesktop,
                        "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-[#0863D6] after:w-0 after:transition-all after:duration-300",
                        "hover:text-[#0863D6] hover:after:w-full",
                        isActive
                          ? "text-[#0863D6] font-semibold after:w-full"
                          : "",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CONTATTI + SOCIAL */}
            <div className="flex items-center gap-3 lg:gap-4">
              <div className={comboWrapperClasses}>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 pl-3 pr-3 py-1.5"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0863D6] text-white shadow-md">
                    <FaPhoneAlt className="text-sm" />
                  </span>
                  <span className="flex flex-col leading-tight text-left">
                    <span
                      className={`text-[9px] uppercase tracking-[0.15em] ${callLabelColor}`}
                    >
                      Chiamaci
                    </span>
                    <span
                      className={`text-[11px] font-semibold ${callNumberColor}`}
                    >
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <a
                  href={RESERVIO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    group flex items-center gap-2 py-1.5 pr-2
                    border-l ${appointmentSeparatorBorder}
                    pl-2 group-hover:pl-3
                    transition-all duration-300
                  `}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0863D6] text-white shadow-md">
                    <FaCalendar className="text-sm" />
                  </span>
                  <span
                    className="
                      max-w-0 opacity-0 overflow-hidden whitespace-nowrap
                      group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-1.5
                      transition-all duration-300 text-[11px]
                    "
                  >
                    Appuntamento
                  </span>
                </a>
              </div>

              {/* SOCIAL */}
              <div className="flex items-center gap-2">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${socialBaseClasses} hover:text-[#1877F2] hover:border-[#1877F2] transition`}
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${socialBaseClasses} hover:text-[#EB2480] hover:border-[#EB2480] transition`}
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            type="button"
            className={`md:hidden inline-flex flex-col justify-center items-center gap-1.5 p-1 transition-colors ${burgerColor}`}
            onClick={toggleMenu}
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-current rounded-full transform transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current rounded-full transform transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* OVERLAY + MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />
          <div
            className="
              absolute inset-y-0 right-0 w-3/4 max-w-xs
              bg-white border-l border-[#E5E7EB]
              shadow-[0_0_35px_rgba(0,0,0,0.35)]
              flex flex-col py-5 px-5
              transform transition-transform duration-300 translate-x-0
            "
          >
            <div className="flex items-center justify-between mb-6">
              <img
                src={logo}
                alt="Leaving Now"
                className="h-7 w-auto object-contain"
              />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Chiudi menu"
                className="inline-flex flex-col justify-center items-center gap-1.5 p-1 text-[#132C50]"
              >
                <span className="block h-0.5 w-5 bg-current rounded-full transform translate-y-1 rotate-45" />
                <span className="block h-0.5 w-5 bg-current rounded-full transform -translate-y-1 -rotate-45" />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-3">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li
                      key={link.to}
                      className="border-b border-[#E5E7EB] last:border-b-0 pb-2"
                    >
                      <NavLink
                        to={link.to}
                        end={link.end}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          [
                            "flex items-center gap-3 px-1 py-2 text-sm font-semibold",
                            "text-[#132C50]",
                            "hover:text-[#0863D6]",
                            isActive ? "text-[#0863D6]" : "",
                          ].join(" ")
                        }
                      >
                        <Icon className="text-lg" />
                        <span>{link.label}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-4 flex justify-center gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] text-[#132C50] hover:border-[#1877F2] hover:text-[#1877F2] transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] text-[#132C50] hover:border-[#EB2480] hover:text-[#EB2480] transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0863D6] px-4 py-2.5 text-sm font-semibold text-white shadow-lg border border-[#0863D6] hover:bg-[#0750ad] transition"
              >
                <FaPhoneAlt className="text-sm" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={RESERVIO_URL}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0863D6]/70 px-4 py-2.5 text-sm font-semibold text-[#0863D6] bg-white hover:bg-[#0863D6]/5 transition"
              >
                <FaCalendar className="text-sm" />
                Richiedi un appuntamento
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



























