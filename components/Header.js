"use client";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 py-4 md:px-10 md:py-5 md:mb-10">
      <div className="flex items-center justify-between">
        {/* Logo and main links */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1
            className="relative text-purple-950 font-bold text-xl md:text-2xl md:mr-10 
  before:content-[''] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 
  before:w-2 before:h-2 before:rounded-full before:bg-cyan-500
  after:content-[''] after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 
  after:w-2 after:h-2 after:rounded-full after:bg-cyan-500"
          >
            Practo
          </h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 ">
            <li className="font-semibold border-b-4 border-cyan-400 text-blue-600">
              Find Doctors
            </li>
            <li className="font-semibold">Video Consult</li>
            <li className="font-semibold">Surgeries</li>
          </ul>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex gap-6 items-center">
          <ul className="flex gap-4 text-sm">
            <li className="flex items-center">
              <span className="bg-violet-900 text-white px-2 rounded-2xl mr-2 text-[10px] py-1">
                NEW
              </span>
              For Corporate <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center">
              For Provider <ChevronDown className="w-4 h-4 ml-1" />
            </li>
            <li className="flex items-center">
              Security & help <ChevronDown className="w-4 h-4 ml-1" />
            </li>
          </ul>
          <div className="border border-neutral-300 px-3 py-1 rounded-sm flex items-center gap-2">
            <button className="text-neutral-500 text-sm">Login</button>
            <span className="text-neutral-300">/</span>
            <button className="text-neutral-500 text-sm">Signup</button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-4 md:hidden space-y-4">
          <ul className="space-y-2">
            <li className="font-semibold text-blue-600">Find Doctors</li>
            <li className="font-semibold">Video Consult</li>
            <li className="font-semibold">Surgeries</li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="bg-violet-900 text-white px-2 rounded-2xl text-[10px] py-1">
                NEW
              </span>
              For Corporate <ChevronDown className="w-4 h-4" />
            </li>
            <li className="flex items-center gap-1">
              For Provider <ChevronDown className="w-4 h-4" />
            </li>
            <li className="flex items-center gap-1">
              Security & help <ChevronDown className="w-4 h-4" />
            </li>
          </ul>
          <div className="border-2 border-neutral-300 px-3 py-1 rounded-sm flex gap-2 w-fit text-sm">
            <button className="text-neutral-500">Login</button>
            <span className="text-neutral-300">/</span>
            <button className="text-neutral-500">Signup</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
