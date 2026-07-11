import CategoriesFilter from '../components/CategoriesFilter';
import DecadesFilter from '../components/DecadesFilter';
import React from 'react';
import SearchingBar from '../components/SearchingBar';


export default function Catalog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl p-4 bg-blue-700 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8">Catalog</h1>
        <p className="text-lg">This is the catalog page where you can browse my collection of Images, 3D Models, projects and more.</p>
      </div>

        {/* Items */}
      <div className="grid grid-cols-2 max-w-4xl p-4 mt-4 justify-items-start flex-col gap-4 bg-blue-700 rounded-lg shadow-lg">
        <SearchingBar />
        <CategoriesFilter />
        <DecadesFilter />
        <div>
            <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        </div>
      </div>
    </div>
  );
}