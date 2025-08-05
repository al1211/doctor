"use Client"
import React from 'react'

// components/DoctorListing.jsx

import { FaThumbsUp } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const  LIistingDoctor= () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* serarc */}
      <div className="bg-white rounded-md overflow-hidden shadow-md flex flex-col md:flex-row w-full max-w-2xl mx-auto mb-5">
                {/* Location */}
                <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300 md:pr-30">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <span className="text-gray-700 text-sm">Jp Nagar</span>
                </div>
      
                {/* Search Input */}
                <div className="flex items-center flex-1 px-4 py-3 gap-2">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Dermatologist"
                    className="flex-1 text-sm outline-none text-gray-800 placeholder:text-gray-400"
                   
                  />
                </div>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 bg-violet-900 py-2 px-5 text-white">
        <select className="border border-gray-300 rounded px-4 py-2 text-sm bg-violet-500">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className="border border-gray-300 rounded px-4 py-2 text-sm">
          <option>Patient Stories</option>
          <option>500+</option>
          <option>1000+</option>
        </select>
        <select className="border border-gray-300 rounded px-4 py-2 text-sm">
          <option>Experience</option>
          <option>10+ years</option>
          <option>20+ years</option>
        </select>
        <select className="border border-gray-300 rounded px-4 py-2 text-sm ml-auto">
          <option>Sort by: Relevance</option>
          <option>Experience</option>
          <option>Rating</option>
        </select>
      </div>
      {/* text */}
      <h2>20 Dermatologist available in Jp nagar, Bangalore</h2>
      <p><span></span>Book appointments with minimun wait-time & verified doctor details</p>

      {/* Doctor Card */}
      <div className="space-y-6">
        {/* Doctor 1 */}
        <div className="bg-white shadow-sm rounded-lg p-6 flex gap-6 items-start">
          <img
            src="/logo-placeholder.png"
            alt="Clinic Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-800">
              Aesthetic Heart Dermatology & Cardiology Clinic
            </h3>
            <p className="text-sm text-gray-500">11 - 13 years experience • Jayanagar</p>
            <p className="text-sm text-gray-700 mt-1">₹800 Consultation Fees</p>
            <div className="flex items-center text-green-600 text-sm mt-2 gap-1">
              <FaThumbsUp />
              <span>97%</span>
              <span className="ml-2 text-gray-500 underline cursor-pointer">159 Patient Stories</span>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Book Clinic Visit
          </button>
        </div>

        {/* Doctor 2 */}
        <div className="bg-white shadow-sm rounded-lg p-6 flex gap-6 items-start">
          <img
            src="/doctor-placeholder.jpg"
            alt="Doctor"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-800">Dr. Sheelavathi Natraj</h3>
            <p className="text-sm text-gray-500">
              Dermatologist • 21 years experience • JP Nagar, Bangalore
            </p>
            <p className="text-sm text-gray-700 mt-1">₹800 Consultation Fees</p>
            <div className="flex items-center text-green-600 text-sm mt-2 gap-1">
              <FaThumbsUp />
              <span>94%</span>
              <span className="ml-2 text-gray-500 underline cursor-pointer">1506 Patient Stories</span>
            </div>
            <div className="text-sm text-green-700 flex items-center gap-2 mt-1">
              <BsFillCalendarCheckFill />
              Available Today
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
              Book Clinic Visit
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded text-sm">
              Contact Clinic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LIistingDoctor;
