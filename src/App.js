import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters:[],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  handleChange = event => {
    const {name,value} = event.target
    this.setState({searchField:value})
  }
  render(){
    const {monsters,searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchField handleChange={this.handleChange} />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
