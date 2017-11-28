import React from 'react';
import './Card.css';

const Card = (props) => {
  const mappedData = Object.keys(props.data).map((dataPoint, index) => {
    return (
      <li key={`li-${index}`}>
        {dataPoint}: {props.data[dataPoint]}
      </li>
    )
  })

  return (
    <div className={props.type}>
      <h4>{props.district}</h4>
      <ul>
        {mappedData}
      </ul>
    </div>
  );
}

export default Card;