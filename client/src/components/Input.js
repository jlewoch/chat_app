import React from 'react';

const Input = ({
  error = false,
  value,
  name,
  id,
  required = false,
  onChange,
  errorMessage,
  placeholder,
  autofocus
}) => {
  return (
    <div className="field">
      <input
        className={`${error ? 'error' : ''}`}
        id={id}
        name={name}
        onChange={e => onChange({ [name]: e.target.value })}
        type="text"
        value={value}
        autoFocus={autofocus}
      />
      <span className="floating-label">
        {placeholder}
        {required && <span className="required">*</span>}
      </span>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default Input;
