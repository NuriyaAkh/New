/**
 * The **Main** component puts together the components of the main page
 */
import './Main.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm'
import { onSearchQuery } from '../../utils/newsApi';
import NewsCard from '../NewsCard/NewsCard';
const Main = () => {

  const [searchResults, setSearchResults] = useState([]);
  console.log("search results",searchResults)
  const [query, setQuery] = useState('');
  const handleSearchQuery = (query) => {
    setQuery(query);
  };
  useEffect(() => {
    if (query) {
      onSearchQuery(query, process.env.REACT_APP_NEWS_API_KEY)
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the search results
          setSearchResults(data.articles);
        })
        .catch((error) => console.log(error));
    }
  }, [query]);


  return <main className="main">
     <div className="main__container">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
<SearchForm onSearchQuery={handleSearchQuery}/>
 {/* Display search results */}
 {searchResults.map((article) => (
        <NewsCard
        key={article.url} card={article}
        />
      ))}
  </main>;
};
export default Main;
