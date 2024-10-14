// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex items-center justify-center space-x-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-600 rounded-lg px-4 py-2 w-64 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={() => onSearch(query)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
