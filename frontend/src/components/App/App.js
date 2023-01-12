import React from 'react';

import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <div className="page">
      <Router>
        <Header />
        <Main />
        <About />
        <Footer />
      </Router>
    </div>
  );
};
export default App;
