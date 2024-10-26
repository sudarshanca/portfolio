"use client";
import React, { useState } from "react";
import ThemeSwitcher from "../General/ThemeSwitcher";
import CustomButton from "../General/CustomButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className='fixed top-0 z-30 w-full border-b border-transparent bg-gray overflow-y-visible bg-gray/50 backdrop-blur-xl md:border-gray-100'>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <h3 className="text-gray-900">logo</h3>
        {/* Hamburger Icon for Mobile */}
        <button
          className="relative justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6 flex md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex text-gray-900 items-center gap-6">
            <a
              href="#"
              className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
            >
              About
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
            >
              Work
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
            >
              Contact
            </a>
          </div>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <ThemeSwitcher />
          <CustomButton
            title="Download Cv"
            ContainerStyles=" bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm transition duration-300 h-dvh`}
      ></div>

      <div
        className={`${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } fixed top-0 right-0 z-50 max-w-xs w-full h-dvh bg-gray shadow-md transform transition duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          <h3 className="text-gray-600">logo</h3>

          <button
            onClick={toggleMenu}
            className="relative justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6 flex md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-4 border-b border-gray-100">
          <a
            href="#"
            className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 mb-4"
          >
            About
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 mb-4"
          >
            Work
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 mb-4"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 mb-4"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex w-full justify-between items-center">
            <p className="text-normal text-base text-gray-600">Switch Theme</p>
            <ThemeSwitcher />
          </div>
          <CustomButton
            title="Download Cv"
            ContainerStyles="mt-4 bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
