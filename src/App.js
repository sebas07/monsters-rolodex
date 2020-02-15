import React, { Component } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox.component';
import CardsList from './Components/CardsList/CardsList.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monstersList: [ ],
      searchText: ''
    }
    // this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monstersList: users }))
    .catch(err => console.log('error requesting users list'));
  }

  onSearchTextChanged = (e) => {
    this.setState({ searchText: e.target.value });
  }

  render() {
    let filteredMonstersList = this.state.monstersList.filter(tmpMonster => tmpMonster.name.toUpperCase().includes(this.state.searchText.toUpperCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex Application</h1>
        <SearchBox 
          fieldPlaceholder='Search monsters...' 
          onSearchTextChanged={ this.onSearchTextChanged } 
        />
        <CardsList monstersList={ filteredMonstersList } />
      </div>
    );
  }

}

export default App;
