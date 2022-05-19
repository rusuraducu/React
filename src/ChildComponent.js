import React, { useState, useContext } from 'react';
import ChildComponent2 from './ChildComponent2.js';
import MyApplicationContext from './MyAppContext.js';

function ChildComponent(props) {
  const [value, setValue] = useState('');
  const { item } = useContext(MyApplicationContext);
  console.log(item);

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
      Value from context: {item}
      <ChildComponent2 />
    </div>
  );
}

export default ChildComponent;
