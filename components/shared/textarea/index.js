import React from 'react';

export const TextArea = ({ type, name, placeholder, value, onChange, onBlur, onKeyPress }) => {
  return (
    <textarea
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur(name)}
      onKeyPress={onKeyPress(name)}
    ></textarea>
  );
};
