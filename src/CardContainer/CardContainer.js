import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) => {
  const mappedCards = props.cards.map((card, index) => {
    const location = Object.keys(card)[0];
    let type = 
      (props.comparison[0] === location || 
       props.comparison[1] === location) ? 
        'Card selected' :
        'Card';
    return (
      <Card 
        key={`card-${index}`}
        selectCard={props.selectCard}
        data={card[location]}
        district={location}
        type={type}
      />
    )
  })

  return (
    <div className="CardContainer">
      {mappedCards}
    </div>
  );
}



export default CardContainer;