import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilter({ title: e.target.value, rating: ratingFilter });
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
    onFilter({ title: titleFilter, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
