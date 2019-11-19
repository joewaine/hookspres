import React from 'react';
import './App.css';

class NoUseEffect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div className="app">
        <h1>with a class</h1>
        <br />
        <br />
        <img src="https://i.imgur.com/i3c5cFr.jpg" style={{width: '800px'}} />
        <br />
        <br />
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default NoUseEffect;
