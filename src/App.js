import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component';

class App extends Component {
  constructor () {
    super();
    this.state = {
      Robots: [],
      SearchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({Robots : users}))
  }

  handleChange = e => {
    this.setState({SearchField : e.target.value});
  };

  render () {
    const {Robots, SearchField} = this.state
    const filteredRobots = Robots.filter(robot=> 
      robot.name.toLowerCase().includes(SearchField.toLowerCase()));
    return (
      <div className='App' >
      <h1>Little Robots</h1>
      <SearchBox 
        placeholder = 'Search Robots Here...'
        handleChange = {this.handleChange}
      />
      <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
