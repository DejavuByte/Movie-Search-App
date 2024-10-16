import React, { useState } from 'react';
import MovieCard from './Components/MovieCard'

const App = ({ movies }) => {
    return (
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))
            ) : (
                <p className="text-white">No movies found. Try searching for something else.</p>
            )}
        </div>
    );
};

export default App;
