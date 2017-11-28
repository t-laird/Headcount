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
      comparison: []
    }
  }

  updateQuery = (value) => {
    this.setState( { cards: this.cleanData.findAllMatches(value)} );
  }

  render() {
    return (
      <div>
        <Header />
        <Search updateQuery={this.updateQuery} />
        <ComparisonContainer comparison={this.state.comparison}/>
        <CardContainer cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
