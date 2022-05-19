import React, { useState } from 'react';
import ChildComponent from './ChildComponent.js';

function ParentComponent(props) {
  const [value, setValue] = useState('NEW');

  const handleValueChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      PARENT COMPONENT
      <h5>Value From Parent: </h5> {value}
      <ChildComponent handleValueChange={handleValueChange} />
    </div>
  );
}

export default ParentComponent;
