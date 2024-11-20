// src/components/Fields/Select/Select.jsx

import React from 'react';
import './Select.css';

const Select = ({ id, value, onChange, options, error, placeholder }) => {
  return (
    <div className="select-container">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Select;
