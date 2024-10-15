import { useState } from "react";

const App = ({ movie }) => {
  return (
    <div
      key={movie.imdbID}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="relative">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-21 object-cover opacity-80 hover:opacity-100 transition duration-300"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold text-white truncate">{movie.Title}</h2>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-gray-400">{movie.Year}</span>
          <span className="text-gray-600">•</span>
          <span className="text-sm text-gray-400 capitalize">{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
