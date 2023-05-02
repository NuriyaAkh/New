
import React, {useState}from 'react';
import './SearchForm.css';

const SearchForm = ({onSearchQuery}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchQuery(searchQuery);
    console.log('handle search submit');
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
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
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search__button" type="submit" area-label="search">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
