import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const arrayOfQualities = ['low', 'low-average', 'average', 'high-average', 'high'];
  const mappedData = Object.keys(props.data).map((dataPoint, index) => {
    const liStyle = props.data[dataPoint] > 1 ? 4 : Math.floor(props.data[dataPoint] * 4.999);   

    return (
      <li key={`li-${index}`}>
        <i className={`icon-apple ${arrayOfQualities[liStyle]}`}></i>
        <p className="date">{dataPoint}:</p> <p className="data">{props.data[dataPoint]}</p>
      </li>
    );
  });

  return (
    <div className={props.type}>
      {
        props.district &&
        <div 
          className='card-content' 
          onClick={() => {props.selectCard(props.district);}}>
          <h4>{props.district}</h4>
          <ul>
            {mappedData}
          </ul>
        </div>
      }
      {
        (props.type === 'Card compared') &&
          <div>
            <h1>Click Two Cards to Compare Districts</h1>
          </div>
      }
      {
        (props.type === 'Card displayComparedData') &&
        <div>
          <h3> {props.district1} </h3>
          <p>District Average: <i className={`icon-apple ${arrayOfQualities[Math.floor(props.compareData[props.district1] * 4.999)]}`}></i>{props.compareData[props.district1]}</p>
          <h3>Percentage Difference: {`${(props.compareData.compared*100).toFixed(1)}%`} 
            <span 
              className="displayChart" 
              onClick={()=> {props.chartStatus(true);}}>
              <i className="icon-chart-line"></i>
            </span>
          </h3>
          <p>District Average: <i className={`icon-apple ${arrayOfQualities[Math.floor(props.compareData[props.district2] * 4.999)]}`}></i>{props.compareData[props.district2]}</p>
          <h3> {props.district2} </h3>
        </div>
      }
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  district: PropTypes.string,
  district1: PropTypes.string,
  district2: PropTypes.string,
  selectCard: PropTypes.func,
  compareData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ])
};

export default Card;