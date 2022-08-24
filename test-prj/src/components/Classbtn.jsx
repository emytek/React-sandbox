import React, { Component } from 'react'
import TestClass from './TestClass';


export default class Classbtn extends Component {
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
      
    decrement() {
        this.setState({
          count: this.state.count - 1
        });
    };
    
    reset() {
        this.setState({
          count: 0
        });
    };

  render() {
    return (
      <div>
         <button className='like-button' onClick={(e) => this.increment(e)}>Increment!</button>
        <button className='like-button' onClick={(e) => this.decrement(e)}>Decrement!</button>
        <button className='like-button' onClick={(e) => this.reset(e)}>Reset</button>
        <h1>Current Count: {this.state.count}</h1> 
        <TestClass />
      </div>
    )
  }
}
