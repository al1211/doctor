"use client";

import { ChevronDown } from "lucide-react";
const Header = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 mb-10 gap-5 bg-white shadow">
      <div className="flex gap-10 items-center">
        <h1 className="text-purple-950 font-bold text-2xl">Practo</h1>
        <ul className="flex gap-10 ">
          <li className="font-semibold border-b-cyan-400 border-b-4 text-blue-600">
            Find Doctors
          </li>
          <li className="font-semibold">Video Consult</li>
          <li className="font-semibold">Surgeries</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <ul className="flex gap-5">
          <li className="flex items-center justify-center">
            <span className="bg-violet-900 text-white px-2 rounded-2xl mr-3 text-[10px] py-1 flex items-center">
              NEW
            </span>
            For Corporate{" "}
            <span>
              {" "}
              <ChevronDown className="w-4 h-4" />
            </span>
          </li>
          <li className="flex items-center ">For Provider <span>
              {" "}
              <ChevronDown className="w-4 h-4" />
            </span></li>
          <li className="flex items-center">Security & help <span>
              {" "}
              <ChevronDown className="w-4 h-4" />
            </span></li>
        </ul>
        <div className="border-neutral-300 border-2 px-2 py-1 rounded-sm gap-1 flex">
          <button className="text-neutral-500">Login</button><span className="text-neutral-300">/</span>
          <button  className="text-neutral-500">Singup</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
