
// src/components/Hero.jsx

import {  ChevronDown } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {FiSearch} from "react-icons/fi"

export default function  HeroSearch() {
  return (
    <section className="     bg-[#2d3482] text-white py-20 px-4 bg-cover  bg-center ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your home for health</h1>
        <h2 className="text-xl mb-6 font-medium">Find and Book</h2>
        
     
        <div className="bg-white rounded-md overflow-hidden shadow-md flex flex-col md:flex-row w-full max-w-2xl mx-auto">
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r-1 md:pr-20 md:mr-3 md:border-neutral-400 md:items-center">
            <FaMapMarkerAlt className="text-gray-500" />
            <span className="text-gray-700">Bangalore</span>
          </div>
          <div className="flex items-center">

          <FiSearch className="text-gray-400 " />
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals, etc."
            className="flex-1 px-4 py-3 outline-none text-gray-800"
            />
            </div>
        </div>

     
        <div className="mt-6 text-sm text-white/80 flex flex-wrap justify-center gap-4">
          <span className="font-medium">Popular searches:</span>
          <span>Dermatologist</span>
          <span>Pediatrician</span>
          <span>Gynecologist/Obstetrician</span>
          <span className="flex items-center">Others  <ChevronDown className="w-4 h-4" /></span>
        </div>
      </div>
    </section>
  );
}
