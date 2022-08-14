import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      string: "Hello Emmanuel!"
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({string: "Welcome Ogah Emmanuel."})}>Click Me</button>
      </div>
    )
  }
}


export default App;
