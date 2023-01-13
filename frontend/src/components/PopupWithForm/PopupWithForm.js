import React, { forwardRef } from 'react';
import './PopupWithForm.css';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

const PopupWithForm = forwardRef((props, ref) => {
  const {
    formTitle,
    name,
    isOpen,
    onClose,
    onSubmit,
    onChange,
    actionButtonText,
    actionLinkText,
    children,
  } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="form" name={name} ref={ref} onSubmit={onSubmit} onChange={onChange}>
        <p className="form__title">{formTitle}</p>
        <div className="form__content">
          {children}
          {/*
        <label htmlFor="email" className="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="form__input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
            />
          </label>
          <label htmlFor="password" className="password">
          <input
            className="auth__form-input"
            name="password"
            placeholder="Password"
            id="password"
            type="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          </label>
          {children}
           <label htmlFor="username" className="username">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="form__input"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required

            />
          </label> */}
        </div>
        <div className="form__content">
          <button className="form__submit-button" type="submit">
            {actionButtonText}
          </button>
          <p className="form__text">
            or{' '}
            <Link className="form__link" to="login">
              {actionLinkText}
            </Link>
          </p>
        </div>
      </form>
    </Modal>
  );
});
export default PopupWithForm;
