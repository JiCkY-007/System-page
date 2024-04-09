import React from "react";

import Logo from "../../src/assets/Calendly.svg";

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-600 h-16 flex items-center justify-between px-0 sticky top-0">
      <img src={Logo} alt="Calendly Logo" className="h-8 ml-5" />
      <div className="flex space-x-4 max-md:hidden ">
        <a href="#" className="hover:underline">
          Product
        </a>
        <a href="#" className="hover:underline">
          Policy
        </a>
        <a href="#" className="hover:underline">
          Integrations
        </a>
      </div>
      <div className="flex flex-row-reverse">
        <div className="flex font-semibold items-center p-2 gap-2">
          Accounts{" "}
          <span className="cursor-pointer" onClick={console.log("heelew")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="flex font-semibold items-center p-2 gap-2">
          Help{" "}
          <span className="cursor-pointer" onClick={console.log("heelew")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* <div className="flex space-x-4">
        <button className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200">
          Log In
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700">
          Sign up free
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;

///////////////////////////////////////////
