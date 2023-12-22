import React from 'react';
import css from './Button.module.css';

export const Button = ({ onClick, children }) => {
  return (
    <button className={css.load} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
