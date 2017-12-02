import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();

    this.cleanData = new DistrictRepository(kinderData);
    
    this.state = {
      cards: [],
      comparison: [null, null],
      dataDescriptions: {},
      currentDataFile: undefined
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.populateData = this.populateData.bind(this);
    this.displayDataLabel = this.displayDataLabel.bind(this);
  }

  componentDidMount() {
    const dataDescriptions = {
      gradData: 'High-school graduation rates',
      kinderData: 'Kindergartners in full day programs', 
      enrollment: 'Student enrollment',
      onlineEnrollment: 'Online student enrollment',
      householdIncome: 'Median household income',
      remediationInHigherEducation: 'Remediation in higher education',
      studentsInPoverty: 'School aged children in poverty',
      specialEducation: 'Students in special education programs',
      titleIstudents: 'Students qualifying for Title I'
    }

    this.setState({
      cards: this.cleanData.data,
      currentDataFile: dataDescriptions.kinderData,
      dataDescriptions
    });
  }

  displayDataLabel(dataType) {
    const currentDataFile = this.state.dataDescriptions[dataType]
    this.setState( {currentDataFile} )
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
        <div className='main-wrapper'>
          <Nav
            dataDescriptions={this.state.dataDescriptions}
            populateData={this.populateData} 
            displayDataLabel={this.displayDataLabel} />
          <div className='containers-wrapper'>
        <Header />
            <ComparisonContainer
              currentDataFile={this.state.currentDataFile}
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
        </div>
      </div>
    );
  }
}

export default App;
