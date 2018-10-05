import React, { Component } from 'react';
import ComponentWithInput from './Components/ComponentWithInput';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
  };

  onSearchInput = (e) => {
    const input = e.target.value;

    if (!input) {
      this.setState({
        ...this.state,
        inputValue: ''
      })}

    this.setState({
      ...this.state,
      inputValue: input
    })

  };

  render() {
    return (
      <div className="App">
          <ComponentWithInput onSearchInput={this.onSearchInput}/>
      </div>
    );
  }
}

export default App;
