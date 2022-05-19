import React, { useState } from 'react';

function ChildComponent(props) {
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    props.handleValueChange(value);
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div>
      <h5>Child Component</h5>

      <form onSubmit={handleValueChange}>
        <input type="text" onChange={handleInputChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ChildComponent;
