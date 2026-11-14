import { NavLink } from "react-router-dom";
import logoI from "../assets/instagramWhite.png";
import testo from "../assets/logoBianco.png";
import mail from "../assets/mail.png";
import tel from "../assets/phone.png";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/portfolio", label: "Portfolio" },
];

const contatti = [
  { src: logoI, alt: "Instagram" },
  { src: mail, alt: "Email" },
  { src: tel, alt: "Telefono" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative bg-gradient-to-r from-orange-300 to-pink-500 md:py-4">
      <div className="mx-auto flex max-w-5xl justify-between items-center gap-4 px-4 py-2 md:px-0 md:py-0">
        <img
          src={testo}
          alt="Graphigers"
          className="w-24 md:w-[8em] object-contain"
        />

        <ul className="my-auto hidden w-fit justify-center gap-4 rounded-full border border-white/30 bg-gradient-to-br from-zinc-900/20 to-zinc-900/15 px-4 py-4 text-xl font-semibold text-white backdrop-blur-lg md:flex">
          {links.map((l, i) => (
            <Fragment key={l.to}>
              {i > 0 && (
                <li aria-hidden="true" className="mx-1 h-6 w-px bg-white/20" />
              )}
              <li>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative block px-6 transition-opacity after:absolute after:inset-x-6 after:inset-y-7 after:bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-white after:transition-transform after:duration-300 ${
                      isActive
                        ? "after:scale-x-120"
                        : "opacity-80 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            </Fragment>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          {contatti.map((c) => (
            <button
              key={c.alt}
              type="button"
              className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-zinc-900/20 backdrop-blur-md transition-all duration-300 hover:border-white/80 hover:bg-zinc-400/30 active:scale-105 md:size-14"
            >
              <img
                src={c.src}
                alt={c.alt}
                className="size-6 object-contain md:size-12"
              />
            </button>
          ))}

          {/* hamburger solo mobile */}
          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-zinc-900/20 text-white backdrop-blur-md md:hidden"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>
      {open && (
        <ul className="absolute inset-x-4 top-full z-40 mt-2 flex flex-col gap-4 rounded-3xl border border-white/30 bg-zinc-900/70 p-6 text-lg font-semibold text-white backdrop-blur-lg md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `relative block px-6 transition-opacity after:absolute after:inset-x-6 after:inset-y-7 after:bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-white after:transition-transform after:duration-300 ${
                    isActive
                      ? "after:scale-x-100"
                      : "opacity-80 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
