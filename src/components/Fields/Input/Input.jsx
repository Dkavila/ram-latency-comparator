import React from 'react';
import './Input.css';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  showError = false,
  errorMessage = '',
  min,
  max,
}) => {
  const isInvalid = showError && !value;

  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`input-field ${isInvalid ? 'error' : ''}`}
      />
      {isInvalid && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default Input;
