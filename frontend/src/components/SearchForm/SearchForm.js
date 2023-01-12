import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('handle search submit');
  };
  return (
    <form className="search" onSubmit={handleSearchSubmit}>
      <label htmlFor="search-form"></label>
      <input
        name="search-form"
        id="search-form"
        className="search__input"
        type="text"
        placeholder="Enter topic"
      />
      <button className="search__button" type="submit" area-label="search">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
