import React from 'react';
import style from './TextButton.module.css';
import PropTypes from 'prop-types';

function TextButton({
  children,
  handleClick,
  backgroundColor,
  width,
  color,
  margin,
  borderRadius
}) {
  return (
    <button
      onClick={handleClick}
      className={style.button}
      style={{ backgroundColor, width, color, margin, borderRadius }}
    >
      {children}
    </button>
  );
}
TextButton.propTypes = {
  children: PropTypes.element.isRequired,
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
};
export default TextButton;
