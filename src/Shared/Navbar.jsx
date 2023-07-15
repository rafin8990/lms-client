import React, { useContext, useState } from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
// import reddot from "../assets/header/Basic_red_dot.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  const handleTabClick = () => {
    setNavbar(false); // Collapse the navbar when a tab is clicked
  };
  return (
    <nav className="w-full bg-black shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <div className="flex items-end">
                {/* <Link to='/'><h2 className="font1 text-4xl  text-white ">Swachh  Akshar</h2></Link> */}
                <Link to="/">
                  <img
                    className=" w-48 "
                    src="https://i.ibb.co/Jxsw2LS/logo-5.png"
                    alt=""
                  />
                </Link>
                {/* <img className="w-2 ml-[5px] mb-[5px]" src={reddot} alt="" /> */}
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="font1 text-xl text-white hover:text-[#FA383E]">
                <Link to="/" onClick={handleTabClick}>
                  Home
                </Link>
              </li>
              <li className="font1 text-xl text-white hover:text-[#FA383E]">
                <Link to="/services" onClick={handleTabClick}>
                  Services
                </Link>
              </li>
              <li className="font1 text-xl text-white hover:text-[#FA383E]">
                <Link to="/about" onClick={handleTabClick}>
                  About
                </Link>
              </li>
              <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1  rounded-lg w-[90px]">
                <li className="font1 text-xl bg-black p-1 text-white first-letter: rounded-lg hover:text-red-500 hover:border-[#FA383E]">
                  <Link to="/courses" onClick={handleTabClick}>
                    {" "}
                    {/* <img
                    className=" w-24"
                    src="https://i.ibb.co/7pKHrRK/1.png"
                    alt=""
                  /> */}
                    Courses
                  </Link>
                </li>
              </div>
              <li className="font1 text-xl text-white hover:text-[#FA383E]">
                <Link to="/collaboration" onClick={handleTabClick}>
                  Collaboration
                </Link>
              </li>
              <li className="font1 text-xl text-white hover:text-[#FA383E]">
                <Link to="/contact" onClick={handleTabClick}>
                  Contact
                </Link>
              </li>
              {user?.uid && (
                <li className="text-xl text-white hover:text-[#FA383E]">
                  <Link to="/dashboard" onClick={handleTabClick}>
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>

            <div className="mt-3 space-y-2 md:hidden">
              {user?.uid ? (
                <div className="flex items-center">
                  <li className="text-base-100 mr-5 mt-3">
                    {user?.displayName}
                  </li>
                  <li
                    onClick={logOut}
                    className="btn bg-[#FA383E] font1 border-none btn-sm btn-outline rounded-lg mt-3"
                  >
                    Log Out
                  </li>
                </div>
              ) : (
                <li className="btn bg-[#FA383E] text-white font1 border-none btn-sm btn-outline rounded-lg mt-3">
                  <Link to="/login" onClick={handleTabClick}>
                    Login
                  </Link>
                </li>
              )}
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          {user?.uid ? (
            <div className="flex items-center">
              <li className="text-base-100 mr-5 mt-3">{user?.displayName}</li>
              <li
                onClick={logOut}
                className="btn bg-[#FA383E] border-none btn-sm btn-outline rounded-lg mt-3"
              >
                Log Out
              </li>
            </div>
          ) : (
            <li className="btn bg-[#FA383E] text-white border-none btn-sm btn-outline rounded-lg mt-3">
              <Link to="/login" onClick={handleTabClick}>
                Login
              </Link>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
