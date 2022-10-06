import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search">
      <input className="search__input" type="text" placeholder='Enter topic'></input>
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
