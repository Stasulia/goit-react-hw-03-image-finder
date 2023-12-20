import React from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ children }) => {
  return <ul className={css.imageGallery}> {children}</ul>;
};
