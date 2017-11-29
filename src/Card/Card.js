import React from 'react';
import './Card.css';

const Card = (props) => {
  const mappedData = Object.keys(props.data).map((dataPoint, index) => {
    const liStyle = props.data[dataPoint] > 0.5 ? 'high' : 'not-yet';
    return (
      <li key={`li-${index}`} className={liStyle}>
        <p>{dataPoint}:</p> {props.data[dataPoint]}
      </li>
    );
  });

  return (
    <div className={props.type}>
      {
        props.district &&
        <div onClick={() => {props.selectCard(props.district);}}>
          <h4>{props.district}</h4>
          <ul>
            {mappedData}
          </ul>
        </div>
      }
      {
        (props.type === "Card compared") &&
          <div>
            <h1>Click Two Cards to Compare Them</h1>
          </div>
      }
      {
        (props.type === "Card displayComparedData") &&
        <div>
          <h3> {props.district1}: {props.compareData[props.district1]}</h3>
          <h3> {props.compareData.compared}</h3>
          <h3> {props.district2}: {props.compareData[props.district2]}</h3>
        </div>
      }
    </div>
  );
};

export default Card;