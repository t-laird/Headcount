import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import './App.css'; 

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <Header />
        <Search />
        <ComparisonContainer />
        <CardContainer />
      </div>
    );
  }
}

export default App;
