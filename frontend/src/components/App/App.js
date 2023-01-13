import React from 'react';

import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from '../Modal/Modal';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
const App = () => {
  return (
    <div className="page">

        <Header />
        <Main />
        <About />
        <Footer />
        <Modal/>


      <PopupWithForm  formTitle={"Sign in"}actionButtonText={"Sign in"}actionLinkText={"Sign up"}/>
    </div>
  );
};
export default App;
