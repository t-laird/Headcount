import React, { Component } from 'react';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Chart from '../Chart/Chart';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.cleanData = new DistrictRepository(kinderData);
    
    this.state = {
      cards: [],
      chartData: {},
      renderChart: false,
      dataDescriptions: {},
      comparison: [null, null],
      currentDataFile: undefined
    };
  }

  componentDidMount() {
    this.setState({
      cards: this.cleanData.data,
      dataDescriptions: this.cleanData.dataDescriptions,
      currentDataFile: this.cleanData.dataDescriptions.kinderData,
    });
  }

  changeData = (dataType, dataFile) => {
    this.displayDataLabel(dataType);
    this.populateData(dataFile);

    this.dataValidation(dataFile, 0);
    this.dataValidation(dataFile, 1);
  }

  displayDataLabel (dataType) {
    const currentDataFile = this.state.dataDescriptions[dataType];

    this.setState( {currentDataFile} );
  }

  populateData (dataFile) {
    this.cleanData = new DistrictRepository(dataFile);
    this.updateQuery('');
  }

  dataValidation (dataFile, index) {
    if(this.state.comparison[index] === 'Colorado') {
      if (dataFile.indexOf( data => data.location === 'Colorado') === -1) {
        let comparison = this.state.comparison;

        comparison[index] = null;
        this.setState({
          comparison,
          chartStatus: false
        });
      }
    }
  }

  updateQuery = (value) => {
    this.setState( {cards: this.cleanData.findAllMatches(value)});
  }

  selectCard = (location) => {
    const locationIndex = this.state.comparison.indexOf(location);

    if (this.state.comparison[0] === null && locationIndex === -1) {
      this.setState( {comparison: [location, this.state.comparison[1]]} );
    } else if (this.state.comparison[1] === null && locationIndex === -1) { 
      this.setState( {comparison: [this.state.comparison[0], location]} ); 
    } else if (locationIndex !== -1) {
      const comparison = [
        ...this.state.comparison.slice(0, locationIndex), 
        null, 
        ...this.state.comparison.slice(locationIndex + 1)
      ];

      this.setState( {comparison, renderChart: false} );
    }
    this.updateQuery('');
  }

  compareCards = (district1, district2) => {
    return this.cleanData.compareDistrictAverages(district1, district2);  
  }

  chartStatus = (status) => {
    this.setState({
      renderChart: status
    });
  }

  render() {
    return (
      <div>
        <div className='main-wrapper'>
          <Nav
            changeData={this.changeData}
            currentData={this.state.currentDataFile}
            dataDescriptions={this.state.dataDescriptions}
          />
          <div className='containers-wrapper'>
            <Header />
            <ComparisonContainer
              selectCard={this.selectCard} 
              chartStatus={this.chartStatus}
              compareCards={this.compareCards}
              comparison={this.state.comparison}
              cards={this.cleanData.findAllMatches('')} 
              currentDataFile={this.state.currentDataFile}
            />
            {
              this.state.renderChart &&
              <Chart 
                chartStatus={this.chartStatus} 
                comparisons={this.state.comparison} 
                cards={this.cleanData.findAllMatches('')} />
            }
            <Search 
              updateQuery={this.updateQuery} 
              numCards={this.state.cards.length} />
            <CardContainer 
              cards={this.state.cards}
              selectCard={this.selectCard} 
              comparison={this.state.comparison}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
