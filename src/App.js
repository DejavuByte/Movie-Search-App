import React, { useState } from 'react';
import SearchBar from './SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY; // Make sure to set your API key in .env
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Movie Search App</h1>
      <SearchBar onSearch={fetchMovies} />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">{movie.Title}</h2>
                <p className="text-gray-400">{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No movies found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
};

export default App;
