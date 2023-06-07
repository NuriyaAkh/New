/**
 * The **Main** component puts together the components of the main page
 */
import './Main.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { onSearchQuery } from '../../utils/newsApi';

const Main = ({ onSearchQuerySuccess }) => {

  const [query, setQuery] = useState('');
  const handleSearchQuery = (query) => {
    setQuery(query);
    console.log(query);
  };
  useEffect(() => {
    if (query) {
      onSearchQuery(query, process.env.REACT_APP_NEWS_API_KEY)
        .then((data) => {
          // Update the state with the search results
          console.log(data);
          onSearchQuerySuccess(data.slice(0, 5));
        })
        .catch((error) => console.log(error));
    } else {
      onSearchQuerySuccess([]);
    }
  }, [query]);
  console.log('search', onSearchQuerySuccess);

  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal account.
        </p>
      </div>
      <SearchForm onSearchQuery={handleSearchQuery} />
      
    </main>
  );
};
export default Main;
