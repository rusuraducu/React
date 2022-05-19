import React from 'react';
import ParentComponent from './ParentComponent.js';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  const = (givenContent) => {
    setState({
      content: givenContent,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ParentComponent />
      </div>
    );
  }
}

export default MainComponent;
