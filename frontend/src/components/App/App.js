import React from 'react';

import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from '../Modal/Modal';
const App = () => {
  return (
    <div className="page">
      <Router>
        <Header />
        <Main />
        <About />
        <Footer />
        <Modal/>
      </Router>
    </div>
  );
};
export default App;
