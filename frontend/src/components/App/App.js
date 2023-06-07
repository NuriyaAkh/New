import React, { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import { getNews } from '../../utils/newsApi';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  const [showMore, setShowMore] = useState(false);
  const [news, setNews] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  useEffect(() => {
    getNews(process.env.REACT_APP_NEWS_API_KEY)
      .then((data) => {
        setNews(data.slice(0, 6));
      })
      .catch((err) => {
        console.error('Error. The request failed', err);
      });
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSearchedResults = (results) => {
    setSearchedResults(results);
  };
  return (
    <div className="page">
      <Router>
        <Header />
        <Main onSearchQuerySuccess={handleSearchedResults}/>
        {/* Display search results */}
        {searchedResults.length > 0 && (
          <NewsCardList cards={searchedResults} onCardSave={() => console.log('save')} />
        )}
        <NewsCardList
          cards={news}
          onCardSave={() => console.log('save')}
          handleShowMore={handleShowMore}
        />
        <About />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
