import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <div>
      <nav
        className={`px-4 lg:px-6 py-1.5 bg-${props.mode} text-${props.mode === "light" ? "dark" : "white"}`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center no-underline">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-purple-400 font-serif">
              {props.title}
            </span>
          </a>

          <div className="flex items-center lg:order-2 space-x-4">
            <div className="relative">
              <input
                type="text"
                className={`block w-full pl-10 p-2.5 rounded bg-${props.mode === "light" ? "gray-200" : "gray-800"} text-${props.mode === "light" ? "text-gray-700" : "text-gray-300"}`}
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.415l4.387 4.388a1 1 0 01-1.415 1.415l-4.387-4.388zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <button
              type="button"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign In
            </button>

            {/* Switch for Light Mode */}
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.tooglemode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === "light" ? "Light Mode" : "Dark Mode"}
              </label>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href ="/" className="block py-2 pr-4 pl-3 text-purple-400 lg:p-0 no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href ="/" className="block py-2 pr-4 pl-3 text-purple-400 lg:p-0 no-underline">
                  About
                </a>
              </li>
              <li>
                <a href ="/" className="block py-2 pr-4 pl-3 text-purple-400 lg:p-0 no-underline">
                  Services
                </a>
              </li>
              <li>
                <a href ="/" className="block py-2 pr-4 pl-3 text-purple-400 lg:p-0 no-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  tooglemode: PropTypes.func.isRequired,
};
