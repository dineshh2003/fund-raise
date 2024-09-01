"use client";

import React from 'react';

export default function StartupDetail({ cardData, onClose }) {
  const { image, title, description } = cardData;

  return (
    <div className="relative w-[80vw] h-[80vh] bg-b1 font-roboto shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center mx-auto">
      {/* Image Section */}
      <div className="w-[35vw] h-[35vh]  rounded-full bg-gray-200 mb-4">
        <img src={image} alt="Startup Image" className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between items-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4 mx-8 ">{description}</p>

        {/* Verified Marker */}
        <p className="text-green-500 font-roboto font-bold mb-4">✔ Verified under the Government of India program</p>

        {/* Donation Section */}
        <div className="flex space-x-4 mb-4">
          <input type="number" placeholder="Enter amount" className="px-4 py-2 border rounded-md" />
          <button className="bg-b3 text-white px-4 py-2 rounded-md hover:bg-b2">Donate</button>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="text-red-500">Back to List</button>
      </div>
    </div>
  );
}
