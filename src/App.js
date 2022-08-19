import React from 'react';
import Cardlist from './components/CardList/Cardlist'
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
        <Cardlist monsters={this.state.monsters}/>
      </div>
    )
  }
}


export default App;
