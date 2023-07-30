import React, { useState } from "react";

const AddMovie = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    // Clear the form after adding the movie
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  return (
    <div className="add-movie">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          min="1"
          max="10"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
