import React, { Component } from 'react';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Header from '../Header/Header';
import Search from '../Search/Search';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import CardContainer from '../CardContainer/CardContainer';
import DistrictRepository from '../helper';


class App extends Component {
  constructor() {
    super();

    this.cleanData = new DistrictRepository(kinderData);

    this.state = {
      cards: this.cleanData.data, 
      comparison: []
    }
    // this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(value) {
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
