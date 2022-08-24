import React, { Component } from 'react'
import Toggle from '../Toggle';

export default class TestClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
          count: this.state.count + 1
        });
    };

  render() {
    return (
      <div>
          <button onClick={(e) => this.increment(e)}
          className='counter-button'>Click <span>{this.state.count}</span></button>
          <Toggle />
      </div>
    )
  }
}
