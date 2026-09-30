import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-pink-500 py-4">
      <ul
        className="flex gap-8 mx-auto text-lg md:text-xl font-semibold text-white justify-center
            border border-white/30 bg-gray-500/25 w-fit rounded-[2rem] px-8 py-3 shadow-lg backdrop-blur-md">
        <li className="">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
        </li>

        <li aria-hidden="true" className="w-px bg-gray-200/20"/>

        <li>
          <NavLink to="/servizi" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Servizi
          </NavLink>
        </li>

        <li aria-hidden="true" className="w-px bg-gray-200/20"/>

        <li>
          <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
