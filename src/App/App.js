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
    this.updateQuery = this.updateQuery.bind(this);
    this.selectCard = this.selectCard.bind(this);
  }

  updateQuery(value) {
    this.setState( {cards: this.cleanData.findAllMatches(value)} );
  }

  selectCard(location) {
    const locationIndex = this.state.comparison.indexOf(location)

    if (this.state.comparison.length < 2 && locationIndex === -1) {
      this.setState( {comparison: [...this.state.comparison, location]} )
    } else if (locationIndex !== -1) {
      let comparison = 
        [...this.state.comparison.slice(0, locationIndex), 
         ...this.state.comparison.slice(locationIndex + 1)];
      this.setState( {comparison} );
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Search updateQuery={this.updateQuery} />
        <ComparisonContainer
          cards={this.state.cards} 
          selectCard={this.selectCard} 
          comparison={this.state.comparison}/>
        <CardContainer 
          cards={this.state.cards}
          comparison={this.state.comparison}
          selectCard={this.selectCard} 
        />
      </div>
    );
  }
}

export default App;
