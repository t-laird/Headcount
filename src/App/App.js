import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Chart from '../Chart/Chart';

class App extends Component {
  constructor() {
    super();

    this.cleanData = new DistrictRepository(kinderData);
    
    this.state = {
      cards: [],
      comparison: [null, null],
      dataDescriptions: {},
      renderChart: false,
      chartData: {},
      currentDataFile: undefined
    };
  }

  componentDidMount() {
    this.setState({
      cards: this.cleanData.data,
      currentDataFile: this.cleanData.dataDescriptions.kinderData,
      dataDescriptions: this.cleanData.dataDescriptions
    });
  }

  displayDataLabel (dataType) {
    const currentDataFile = this.state.dataDescriptions[dataType];

    this.setState( {currentDataFile} );
  }

  populateData (dataFile) {
    this.cleanData = new DistrictRepository(dataFile);
    this.updateQuery('');
  }

  changeData = (dataType, dataFile) => {
    this.displayDataLabel(dataType);
    this.populateData(dataFile);

    if(this.state.comparison[0] === 'Colorado') {
      if (dataFile.indexOf( data => data.location === 'Colorado') === -1) {
        this.setState({
          comparison: [null, this.state.comparison[1]]
        });
      }
    }

    if (this.state.comparison[1] === 'Colorado') {
      if (dataFile.indexOf( data => data.location === 'Colorado') === -1) {
        this.setState({
          comparison: [this.state.comparison[0], null]
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
      let comparison = 
        [...this.state.comparison.slice(0, locationIndex), null, 
          ...this.state.comparison.slice(locationIndex + 1)];

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
            dataDescriptions={this.state.dataDescriptions}
            changeData={this.changeData}
            currentData={this.state.currentDataFile}
          />
          <div className='containers-wrapper'>
            <Header />
            <ComparisonContainer
              currentDataFile={this.state.currentDataFile}
              selectCard={this.selectCard} 
              compareCards={this.compareCards}
              comparison={this.state.comparison}
              cards={this.cleanData.findAllMatches('')} 
              chartStatus={this.chartStatus}
            />
            {
              this.state.renderChart &&
              <Chart 
                comparisons={this.state.comparison} 
                chartStatus={this.chartStatus} 
                cards={this.cleanData.findAllMatches('')} />
            }
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
