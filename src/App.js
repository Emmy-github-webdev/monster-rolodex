import React from 'react';
import Cardlist from './components/CardList/Cardlist';
import SearchBox from './components/search-box/Search-Box';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()
    .then(user => this.setState({monsters: user}))
    )
    
  };

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className='App'>
        <h1>Monsters Garden</h1>
        <SearchBox  
          placeholder='Search monster'
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
