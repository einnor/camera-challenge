import React from 'react';

import { IButton } from '../../@types';

import './style.scss';

const Button = (props: IButton) => {
  const {
    disabled,
    onClick,
    icon,
    text,
  } = props;

  return (
    <button
      className={`button ${disabled ? 'button--disabled' : ''}`}
      onClick={(event) => onClick(event)}
      disabled={disabled}
    >
      {icon && icon}
      <span>{text && text}</span>
    </button>
  );
};

export default Button;
