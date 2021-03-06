import React from 'react';

export const Input = ({ type, name, placeholder, value, onChange, onBlur, onKeyPress }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur(name)}
      onKeyPress={onKeyPress(name)}
    />
  );
};
