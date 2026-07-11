import React from 'react';

export default function SearchingBar() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-900 text-white">
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-700 rounded-full text-white placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}