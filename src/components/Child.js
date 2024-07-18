import React, { useState } from 'react';

const Child = ({ sendDataToParent }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    sendDataToParent(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Send to Parent</button>
    </div>
  );
};

export default Child;
