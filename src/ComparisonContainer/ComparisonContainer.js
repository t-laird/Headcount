import React from 'react';
import './ComparisonContainer.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const ComparisonContainer = (props) => {
  const selectedCards = [];

  selectedCards[0] = populateComparison(0);
  selectedCards[1] = populateComparison(1);

  function populateComparison(position) {
    let comparisonIndex = props.comparison[position] 
      ? props.cards.find(card => {
        const district = Object.keys(card)[0];

        return (props.comparison[position] === district);
      }) 
      : null;

    return comparisonIndex;
  }

  const mappedCards = selectedCards.map((card, index) => {
    if (!card) {
      return null;
    }
    const district = Object.keys(card)[0];

    return (
      <Card 
        district={district}
        type='Card selected'
        key={`card-${index}`}
        data={card[district]}
        selectCard={props.selectCard} />
    );
  });

  const comparisonCardData = 
    (mappedCards[0] && mappedCards[1])
      ? props.compareCards(mappedCards[0].props.district, mappedCards[1].props.district)
      : null;
  
  return (
    <div className="ComparisonContainer">
      <div className="cards">
        <h3>Currently showing: {props.currentDataFile}</h3>
        <div className="instructions">
          <h5>Click card to remove</h5>
          <h5>Click graph icon</h5>
          <h5>Click card to remove</h5>
        </div>
        {
          mappedCards[0] &&
          mappedCards[0]
        }
        {
          !mappedCards[0] &&
          <Card 
            type="Card comparison" 
            data={{}} />
        }

        {
          comparisonCardData &&
          <Card 
            data={{}}
            type="Card displayComparedData"
            compareData={comparisonCardData}
            district1={mappedCards[0].props.district.toUpperCase()}
            district2={mappedCards[1].props.district.toUpperCase()}
            chartStatus={props.chartStatus} />
        }
        {
          !comparisonCardData &&
          <Card
            type="Card compared"
            data={{}} />
        }

        {
          mappedCards[1] &&
          mappedCards[1]
        }
        {
          !mappedCards[1] &&
          <Card 
            type="Card comparison" 
            data={{}} />
        }
      </div>
    </div>
  );
};

ComparisonContainer.propTypes = {
  cards: PropTypes.array,
  selectCard: PropTypes.func,
  comparison: PropTypes.array,
  chartStatus: PropTypes.func,
  compareCards: PropTypes.func,
  currentDataFile: PropTypes.string
};

export default ComparisonContainer;