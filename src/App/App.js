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
      cards: [],
      comparison: [null, null],
      dataDescription: {}
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.populateData = this.populateData.bind(this);
  }

  componentDidMount() {
    const dataDescription = {
      gradData: '',
      kinderData: '',
      enrollment: '',
      onlineEnrollment: '',
      householdIncome: '',
      remediationInHigherEducation: '',
      studentsInPoverty: '',
      specialEducation: '',
      titleIstudents: ''
    }

    this.setState({
      cards: this.cleanData.data,
      dataDescription
    });
  }

  populateData(dataFile) {
    this.cleanData = new DistrictRepository(dataFile);
    this.updateQuery('');
  }

  updateQuery(value) {
    this.setState( {cards: this.cleanData.findAllMatches(value)});
  }

  selectCard(location) {
    const locationIndex = this.state.comparison.indexOf(location);
    
    if (this.state.comparison[0] === null && locationIndex === -1) {
      this.setState( {comparison: [location, this.state.comparison[1]]} );
    } else if (this.state.comparison[1] === null && locationIndex === -1) {      
      this.setState( {comparison: [this.state.comparison[0], location]} );      
    } else if (locationIndex !== -1) {
      let comparison = 
        [...this.state.comparison.slice(0, locationIndex), null, 
          ...this.state.comparison.slice(locationIndex + 1)];

      this.setState( {comparison} );
    }
    this.updateQuery('');
  }

  compareCards(district1, district2) {
    return this.cleanData.compareDistrictAverages(district1, district2);  
  }

  render() {    
    return (
      <div>
        <Header populateData={this.populateData}/>
        <ComparisonContainer
          selectCard={this.selectCard} 
          compareCards={this.compareCards}
          comparison={this.state.comparison}
          cards={this.cleanData.findAllMatches('')} 
        />
        <Search updateQuery={this.updateQuery} />
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
