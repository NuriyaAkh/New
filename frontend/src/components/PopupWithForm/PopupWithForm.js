import React from 'react';
import './PopupWithForm.css';

const PopupWithForm = ({ name, formTitle, isOpen, onClose }) => {
  return (
    <form
      className="form"
      name={name}
      action="#"
      onSubmit={onSubmit}
      onChange={onChange}
      noValidate
    >
      <h2 className="form__title">{formTitle}</h2>
      <button type="submit" area-label="" className="form__button">
        Submit
      </button>
    </form>
  );
};
export default PopupWithForm;
