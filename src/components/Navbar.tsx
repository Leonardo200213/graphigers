import { NavLink } from "react-router-dom";
import logoI from "../assets/instagramWhite.png";
import testo from "../assets/logoBianco.png";
import mail from "../assets/mail.png";
import tel from "../assets/phone.png";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-orange-300 to-pink-500 md:py-4">
        <div className="mx-auto flex max-w-7xl justify-between gap-8">
          <div className="relative">
            <img
              src={testo}
              alt="Graphigers"
              className="w-[8em] object-contain"
            />
          </div>
          <nav className="flex self-center items-stretch justify-center gap-4">
            <ul
              className="flex gap-8 my-auto mx-16 text-lg md:text-xl font-semibold text-white justify-center
              border border-white/30 bg-gray-500/25 w-fit rounded-full px-12 py-4 backdrop-blur-lg"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li aria-hidden="true" className="w-px bg-gray-200/20" />
              <li>
                <NavLink
                  to="/servizi"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Servizi
                </NavLink>
              </li>
              <li aria-hidden="true" className="w-px bg-gray-200/20" />
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className="flex items-center justify-center border border-white/30 bg-gray-500/25 self-stretch w-15 shrink-0 rounded-full backdrop-blur-md"
            >
              <img
                src={logoI}
                alt="Instagram"
                className="h-12 w-12 object-contain"
              />
            </button>
            <button
              type="button"
              className="flex items-center justify-center border border-white/30 bg-gray-500/25 self-stretch w-15 shrink-0 rounded-full backdrop-blur-md"
            >
              <img
                src={mail}
                alt="Email"
                className="h-12 w-12 object-contain"
              />
            </button>
            <button
              type="button"
              className="flex items-center justify-center border border-white/30 bg-gray-500/25 self-stretch w-15 shrink-0 rounded-full backdrop-blur-md"
            >
              <img
                src={tel}
                alt="Telefono"
                className="h-12 w-12 object-contain"
              />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
