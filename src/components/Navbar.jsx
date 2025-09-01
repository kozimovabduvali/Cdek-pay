import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const linkClass =
    "relative text-xs p-2.75 py-3.5 overflow-hidden text-black/65 text-shadow-base tracking-widest uppercase";

  return (
    <header className="bg-white shadow-lg border-b border-[#E0E0E0] max-lg:py-1">
      <nav className="flex items-center gap-4 w-full max-w-310 mx-auto px-5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="max-lg:hidden flex items-center">
          <NavLink to="/" className={linkClass}>
            {({ isActive }) => (
              <>
                Частным лицам
                <span
                  className={`absolute bottom-0 left-0 block w-full border-b-2 ${
                    isActive ? "border-[#00A942]" : "border-transparent"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          <NavLink to="/business" className={linkClass}>
            {({ isActive }) => (
              <>
                Бизнесу
                <span
                  className={`absolute bottom-0 left-0 block w-full border-b-2 ${
                    isActive ? "border-[#00A942]" : "border-transparent"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          <NavLink to="/shops" className={linkClass}>
            {({ isActive }) => (
              <>
                Интернет-магазинам
                <span
                  className={`absolute bottom-0 left-0 block w-full border-b-2 ${
                    isActive ? "border-[#00A942]" : "border-transparent"
                  }`}
                ></span>
              </>
            )}
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            {({ isActive }) => (
              <>
                О компании
                <span
                  className={`absolute bottom-0 left-0 block w-full border-b-2 ${
                    isActive ? "border-[#00A942]" : "border-transparent"
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
