import React from 'react';
import './Styles/Card.css';

function Card (props) {
  const mappedData = Object.keys(props.data).map((dataPoint, index) => {
    return (
      <li key={`li-${index}`}>
        {dataPoint}: {props.data[dataPoint]}
      </li>
    )
  })

  return (
    <div className="Card">
      <h4>{props.district}</h4>
      <ul>
        {mappedData}
      </ul>
    </div>
  );
}

export default Card;