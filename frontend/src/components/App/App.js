import React from 'react';

import './App.css';
import Main from '../Main/Main'
import Footer from '../Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
const App =()=>{
  return (
    <div className='page'>
      <div className='page__wrapper'>
        {/* <Header/> */}
        <Router>
        <Main/>
        <Footer/>
        </Router>
      </div>
    </div>
  )
}
export default App;