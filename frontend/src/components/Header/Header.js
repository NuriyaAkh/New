import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [buttonText, setButtonText] = useState('Log Out'); //change it when log in implemented
  const handleLogOut = () => {
    console.log('handle on log out');
  };
  return (
    <header className="header">
      <Link className="header__name" to="/">
        NewsExplorer
      </Link>

      {/* <Route exact path="/"> */}
      <div className="header__container">
        <Link to="/" className="header__link">
          Home
        </Link>
        <button className="header__button" type="button" onClick={handleLogOut}>
          {/* <button className="header__log-in" onClick={handleLogOut}> */}
          {buttonText}
        </button>
      </div>
      {/* </Route> */}
      {/* <Route path="/signup">
        <Link className="header__link" to="signin">
          Log In
        </Link>
      </Route>
      <Route path="/signin">
        <Link className="header__link" to="signup">
          Sign Up
        </Link>
      </Route> */}
    </header>
  );
};
export default Header;
