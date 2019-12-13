import React from 'react';
import './styles.css';

function Form() {
  return (
    <div className="form">
      <input type="text" placeholder="Search..." className="form__input" />
      <button className="form__button">Get !!</button>
    </div>
  );
}

export default Form;
