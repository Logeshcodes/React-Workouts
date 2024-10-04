import React, { useState } from 'react';

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value); // Updating state on change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Value:', inputValue); // Using the state value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue} // Controlled by state
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledComponent;
