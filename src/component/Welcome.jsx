import React from 'react';
import css from '../css/Welcome.module.css';
import logo from '../logo.svg';

const Welcome = () => {

  return (
    <div className={css.welcome_wrapper}>
      <img
        className={css.logo}
        src={logo}
        alt={'main logo'}
      />
      <p className={css.main_text}>React!!</p>
    </div>
  );
};

export default Welcome;