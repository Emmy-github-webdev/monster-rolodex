import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters: []
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()
    .then(user => this.setState({monsters: user}))
    )
    
  }
  render() {
    return (
      <div>
        {this.state.monsters.map((monster, id) => {
          return (
            <p key={id}>{monster.name}</p>
          )
        })}
        
      </div>
    )
  }
}


export default App;
