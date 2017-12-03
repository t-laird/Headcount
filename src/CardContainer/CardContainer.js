import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = (props) => {
  const mappedCards = props.cards.map((card, index) => {
    const district = Object.keys(card)[0];
    const type = (props.comparison[0] === district || props.comparison[1] === district) 
      ? 'Card selected' 
      : 'Card';

    return (
      <Card 
        type={type} 
        district={district}
        key={`card-${index}`}
        data={card[district]}
        selectCard={props.selectCard} />
    );
  });

  return (
    <div className="CardContainer">
      {mappedCards}
    </div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array,
  selectCard: PropTypes.func,
  comparison: PropTypes.array
};

export default CardContainer;