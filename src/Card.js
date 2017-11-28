import React from 'react';

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
      <h3>{props.district}</h3>
      <ul>
        {mappedData}
      </ul>
    </div>
  );
}

export default Card;