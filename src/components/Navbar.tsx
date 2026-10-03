import { NavLink } from "react-router-dom";
import logoI from "../assets/instagramWhite.png";
import testo from "../assets/graphigers.png";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-orange-300 to-pink-500 py-8">
        <div className="mx-auto flex max-w-7xl items-stretch justify-between gap-4">
          <div className="relative w-48">
              <img
                src={testo}
                alt="Graphigers"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          <nav className="flex items-stretch justify-center gap-4 mr-16">
          
            <ul
              className="flex gap-8 my-auto mx-16 text-lg md:text-xl font-semibold text-white justify-center
              border border-white/30 bg-gray-500/25 w-fit rounded-full px-12 py-4 shadow-lg backdrop-blur-md"
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
              className="flex items-center justify-center border border-white/30 bg-gray-500/25 self-stretch w-15 shrink-0 rounded-full shadow-lg backdrop-blur-md"
            >
              <img
                src={logoI}
                alt="Instagram"
                className="h-10 w-10 object-contain"
              />
            </button>
            <button
              type="button"
              className="flex items-center justify-center border border-white/30 bg-gray-500/25 self-stretch w-15 shrink-0 rounded-full shadow-lg backdrop-blur-md"
            >
              <img
                src={logoI}
                alt="Instagram"
                className="h-10 w-10 object-contain"
              />
            </button>
            <button
              type="button"
              className="flex items-center justify-center border border-white/30 bg-gray-500/25 self-stretch w-15 shrink-0 rounded-full shadow-lg backdrop-blur-md"
            >
              <img
                src={logoI}
                alt="Instagram"
                className="h-10 w-10 object-contain"
              />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
