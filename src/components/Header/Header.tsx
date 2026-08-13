"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, Globe, Menu, User } from "lucide-react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-airbnb-gray-100 transition-shadow duration-200">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10 h-20 flex items-center justify-between">
        {/* Airbnb Logo */}
        <div className="flex-1 flex items-center">
          <a
            href="#"
            aria-label="Airbnb homepage"
            className="flex items-center gap-2 text-airbnb-red focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg p-1"
          >
            <svg
              className="h-8 w-auto fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.298-3.14 7.806-7.394 7.806-2.88 0-5.32-1.63-6.106-4.04l-.066-.232-.234-.781-.234.781c-.72 2.18-3.09 3.992-6.106 4.04l-.26.006C4.846 31.774 1.706 28.266 1.706 23.968c0-1.127.267-2.183.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C11.743 1.963 13.198 1 15.206 1H16zm0 2.875c-1.196 0-2.155.603-3.238 2.537l-.547 1.053c-1.927 3.777-6.073 12.459-7.042 14.717-.584 1.359-.794 2.137-.794 2.886 0 3.013 2.11 5.469 4.887 5.469 2.148 0 4.01-1.378 4.793-3.568l.641-1.782.641 1.782c.783 2.19 2.645 3.568 4.793 3.568 2.777 0 4.887-2.456 4.887-5.469 0-.749-.21-1.527-.794-2.886-.969-2.258-5.115-10.94-7.042-14.717l-.547-1.053c-1.083-1.934-2.042-2.537-3.238-2.537zM16 14.625c2.692 0 4.875 2.183 4.875 4.875 0 2.45-1.808 4.478-4.175 4.825l-.22.019-.241-.004c-2.458-.2-4.414-2.261-4.414-4.84 0-2.692 2.183-4.875 4.875-4.875zm0 2.375c-1.381 0-2.5 1.119-2.5 2.5 0 1.341 1.056 2.437 2.38 2.496l.12.004c1.381 0 2.5-1.119 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5z" />
            </svg>
            <span className="font-bold text-xl tracking-tight text-airbnb-red hidden sm:inline-block">
              airbnb
            </span>
          </a>
        </div>

        {/* Search Capsule */}
        <div className="flex items-center">
          <button
            type="button"
            className="flex items-center text-sm font-semibold border border-airbnb-gray-200 rounded-full shadow-airbnb hover:shadow-md transition-shadow py-2 px-4 gap-3 bg-white"
            aria-label="Start your search"
          >
            <span className="text-airbnb-black pl-2">Anywhere</span>
            <span className="h-4 w-[1px] bg-airbnb-gray-200" aria-hidden="true" />
            <span className="text-airbnb-black">Any week</span>
            <span className="h-4 w-[1px] bg-airbnb-gray-200" aria-hidden="true" />
            <span className="text-airbnb-gray-400 font-normal">Add guests</span>
            <div className="bg-airbnb-red text-white p-2 rounded-full ml-1">
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* User / Action Controls */}
        <div className="flex-1 flex items-center justify-end gap-1 relative" ref={menuRef}>
          <button
            type="button"
            className="hidden md:block text-sm font-medium text-airbnb-black hover:bg-airbnb-gray-50 py-2.5 px-3.5 rounded-full transition-colors"
          >
            Airbnb your home
          </button>

          <button
            type="button"
            aria-label="Choose a language and currency"
            className="p-2.5 rounded-full hover:bg-airbnb-gray-50 text-airbnb-black transition-colors"
          >
            <Globe className="w-4 h-4 stroke-[1.8]" />
          </button>

          {/* User Menu Trigger */}
          <div className="relative">
            <button
              type="button"
              id="user-menu-button"
              aria-expanded={isMenuOpen}
              aria-haspopup="menu"
              aria-label="User navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 border border-airbnb-gray-200 rounded-full py-1.5 px-3 hover:shadow-airbnb transition-shadow bg-white ml-1"
            >
              <Menu className="w-4 h-4 text-airbnb-black stroke-[2]" />
              <div className="w-7 h-7 bg-airbnb-gray-400 rounded-full flex items-center justify-center text-white overflow-hidden">
                <User className="w-4 h-4 text-white" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div
                role="menu"
                aria-labelledby="user-menu-button"
                className="absolute right-0 top-12 w-60 bg-white rounded-2xl shadow-popup border border-airbnb-gray-100 py-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-100"
              >
                <div className="py-1">
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full text-left px-4 py-2.5 font-semibold text-airbnb-black hover:bg-airbnb-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign up
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full text-left px-4 py-2.5 text-airbnb-gray-600 hover:bg-airbnb-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log in
                  </button>
                </div>
                <div className="h-[1px] bg-airbnb-gray-100 my-1" />
                <div className="py-1">
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full text-left px-4 py-2.5 text-airbnb-gray-600 hover:bg-airbnb-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Airbnb your home
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full text-left px-4 py-2.5 text-airbnb-gray-600 hover:bg-airbnb-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Help Center
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
