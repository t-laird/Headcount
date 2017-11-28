import React from 'react';
import Card from './Card';

function CardContainer ({cards}) {
  const mappedCards = cards.map((card) => {
    return (
      <div>hello</div>
      // <Card />
    )
  })

  return (
    <div className="CardContainer">
      {mappedCards}
    </div>
  );
}



export default CardContainer;