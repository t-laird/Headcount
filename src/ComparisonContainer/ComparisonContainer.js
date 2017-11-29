import React from 'react';
import './ComparisonContainer.css';
import Card from '../Card/Card';

const ComparisonContainer = (props) => {
  const selectedCards = props.cards.filter(card => {
    const location = Object.keys(card)[0];
    return (props.comparison[0] === location || props.comparison[1] === location) 
  })

  const mappedCards = selectedCards.map((card, index) => {
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
  })
  return (
    <div className="ComparisonContainer">
      <h3>Click Two Cards to Compare the School Districts</h3>
      {mappedCards}
      <Card type="Card Comparison" data={{}}/>
      <Card type="Card Comparison" data={{}}/>
      <Card type="Card Comparison" data={{}}/>
    </div>
  );
}

export default ComparisonContainer;