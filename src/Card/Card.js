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
    <div onClick={() => {props.selectCard(props.district)}} className={props.type}>
    {
      props.district &&
      <div>

        <h4>{props.district}</h4>
        <ul>
          {mappedData}
        </ul>
      </div>

}
    {
      (props.type === "Card compared") &&

      <h1>Click Two Cards to Compare Them</h1>
    }
    </div>
  );
}

export default Card;