import React from 'react';
import './ComparisonContainer.css';
import Card from '../Card/Card';

const ComparisonContainer = (props) => {
  const selectedCards = [];
  selectedCards[0] = populateComparison(0);

  selectedCards[1] = populateComparison(1);

  function populateComparison(position) {
    let comparisonIndex = props.comparison[position] ? 
      props.cards.find(card => {
        const location = Object.keys(card)[0];
        return (props.comparison[position] === location);
      }) : null;

    return comparisonIndex;
  }
  const mappedCards = selectedCards.map((card, index) => {
    if (!card) {
      return null;
    }
    const location = Object.keys(card)[0];
    return (
      <Card 
        key={`card-${index}`}
        selectCard={props.selectCard}
        data={card[location]}
        district={location}
        type='Card selected'
      />
    )
  });

  const comparisonCard = null;

  return (
    <div className="ComparisonContainer">
      <h3>Click Two Cards to Compare the School Districts</h3>
      {
        mappedCards[0] &&
        mappedCards[0]
      }
      {
        !mappedCards[0] &&
        <Card type="Card Comparison" data={{}}/>
      }


      {
        comparisonCard &&
        null
      }
      {
        !comparisonCard &&
        <Card type="Card compared" data={{}}/>
      }

      
      {
        mappedCards[1] &&
        mappedCards[1]
      }
      {
        !mappedCards[1] &&
        <Card type="Card Comparison" data={{}}/>
      }
    </div>
  );
}

export default ComparisonContainer;