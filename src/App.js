import React, { Component } from 'react';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import Header from './Header';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import './App.css'; 


class App extends Component {
  constructor() {
    super();

    this.cleanData = new DistrictRepository(kinderData);

    this.state = {
      cards: this.cleanData.data, 
      query: ''
    }
  }

  updateQuery = (value) => {
    this.setState( {query: value, cards: this.cleanData.findAllMatches(value)} );
  }

  render() {
    return (
      <div>
        <Header />
        <Search updateQuery={this.updateQuery} />
        <ComparisonContainer />
        <CardContainer cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
