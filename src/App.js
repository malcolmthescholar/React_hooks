import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    // Initial movie data
    {
      title: "Movie 1",
      description: "Description of Movie 1",
      posterURL: "./logo192.png",
      rating: 7.5,
    },
    // Add more movie objects here as needed
  ]);

  const handleFilter = ({ title, rating }) => {
    // Filter the movies based on title and rating
    // You can implement the logic to filter the movies here
    // For simplicity, we will just filter the title for this example
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleAddMovie = (newMovie) => {
    // Add a new movie to the list
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
      <AddMovie handleAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;
