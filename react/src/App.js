import React, { Component } from 'react'

class App extends Component {
  state = {
    value: 0
  }

  increase = () => {
    this.setState(({ value }) => ({
      value: value + 1
    }))
  }

  decrease = () => {
    this.setState(({ value }) => ({
      value: value - 1
    }))
  }

  render() {
    return (
      <div id="container">
        <div id="buttons">
          <button onClick={this.decrease}>-</button>
          <div>{this.state.value}</div>
          <button onClick={this.increase}>+</button>
        </div>
      </div>
    )
  }
}

export default App
