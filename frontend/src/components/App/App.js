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

  useEffect(() => {
    getNews()
      .then((data) => {
        console.log(data);
        setNews(data.slice(0, 3))})
      .catch((err) => {
        console.error('Error. The request failed', err);
      });
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="page">
        <Router>
        <Header />
      <Main />
      <NewsCardList cards={news} onCardSave={() => console.log('save')} onCardClick={() => console.log('card click')} handleShowMore={handleShowMore} />
      <About />
      <Footer />
        </Router>

    </div>
  );
};

export default App;
