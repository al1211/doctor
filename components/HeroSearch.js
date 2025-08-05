"use client"

import { useRouter } from "next/navigation";
import React from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function HeroSearch() {
  const [search,setSearch]=useState("");
  const router=useRouter()
  const handleKeyDown=(e)=>{
    if(e.key==="Enter" && search.trim()){
     router.push(`/about`)
    }
  

  }
 
  
  return (
    <section
      className="bg-[#2d3482] text-white py-20 px-4 bg-cover bg-center min-h-[400px]"
     
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your home for health</h1>
        <h2 className="text-xl mb-6 font-medium">Find and Book</h2>

        {/* Search Container */}
        <div className="bg-white rounded-md overflow-hidden shadow-md flex flex-col md:flex-row w-full max-w-2xl mx-auto">
          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
            <FaMapMarkerAlt className="text-gray-500" />
            <span className="text-gray-700 text-sm">Bangalore</span>
          </div>

          {/* Search Input */}
          <div className="flex items-center flex-1 px-4 py-3 gap-2">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals, etc."
              className="flex-1 text-sm outline-none text-gray-800 placeholder:text-gray-400"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-6 text-sm text-white/80 flex flex-wrap justify-center gap-4">
          <span className="font-medium">Popular searches:</span>
          <span>Dermatologist</span>
          <span>Pediatrician</span>
          <span>Gynecologist/Obstetrician</span>
          <span className="flex items-center gap-1">
            Others <ChevronDown className="w-4 h-4" />
          </span>
        </div>
      </div>
    </section>
  );
}
