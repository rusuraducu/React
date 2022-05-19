import React, { useState } from 'react';
import MyApplicationContext from './MyAppContext.js';

class ChildComponent2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction = () => {
    console.log('Button clicked!');
  };

  render() {
    return (
      <div>
        <h5> Child Of Child Component: </h5>
        <button onClick={() => this.handleAction()}> ClickMe! </button>
      </div>
    );
  }
}

export default ChildComponent2;
