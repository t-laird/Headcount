import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({cards}) => {
  const mappedCards = cards.map((card, index) => {
    const location = Object.keys(card)[0];
    return (
      <Card 
        key={`card-${index}`}
        data={card[location]}
        district={location}
        type={"Card"}
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