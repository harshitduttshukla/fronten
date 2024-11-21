import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header({ setSearchQuery }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(searchInput);  // Passing the search query to Home component
  };

  return (
    <header className="shadow sticky top-0 z-50 bg-gray-800">
      <nav className="bg-gray-900 border-gray-200 px-4 lg:px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="text-yellow-500 font-bold text-xl">
            Gramarth
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              to="signup"
              className="hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Log in
            </Link>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex items-center justify-center w-full text-white rounded-md px-3 py-2 bg-gray-700 hover:bg-gray-600 focus:outline-none"
                >
                  Indian States
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="py-1">
                      {["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar"].map((state) => (
                        <NavLink
                          key={state}
                          to={`/state/${state.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={toggleDropdown}
                        >
                          {state}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li className="flex items-center">
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchChange}
                  className="p-1 mx-2 border rounded-lg focus:outline-none"
                  placeholder="Search..."
                />
                <button
                  className="bg-yellow-500 text-white rounded-lg px-3 py-1"
                  onClick={handleSearchSubmit}
                >
                  Search
                </button>
              </li>

              {["/", "/about", "/sell", "/help", "/message"].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 text-white hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
                    }
                  >
                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
