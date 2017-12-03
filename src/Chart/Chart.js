import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './Chart.css';
import Button from '../Button/Button';

const Chart = (props) => {
  const comparedLocations = props.cards.filter( card => {
    const district = Object.keys(card)[0];

    return district === props.comparisons[0] || district === props.comparisons[1];
  });
  
  const district1Name = Object.keys(comparedLocations[0])[0];
  const district2Name = Object.keys(comparedLocations[1])[0];
  const district1 = comparedLocations[0][district1Name];
  const district2 = comparedLocations[1][district2Name];

  const location1 = Object.assign({}, 
    {district: district1Name}, 
    {scores: Object.values(district1)}, 
    {dates: Object.keys(district1)}
  );
  const location2 = 
    Object.assign({}, 
      {district: district2Name}, 
      {scores: Object.values(district2)}, 
      {dates: Object.keys(district2)}
    );

  const mappedDates = location1.dates.map( (date, index) => {
    if (location1.dates.length > 10) {
      return (
        <li 
          style={{width: 600/location1.dates.length + 'px', fontSize: '10px'}} 
          key={index}>{date}
        </li>
      );
    } else {
      return (
        <li 
          style={{width: 600/location1.dates.length + 'px'}} 
          key={index}>{date}
        </li>
      );
    }
  });

  const dataMax = Math.max(1, ...location1.scores, ...location2.scores);

  return (
    <div className="Chart">
      <div className="chart-container">
        <div className="axis">
          <span>0</span>
          <span>{dataMax}</span>
        </div>
        <Sparklines 
          min={0} 
          height={50} 
          width={100} 
          max={dataMax} 
          data={location1.scores}>
          <SparklinesLine 
            color="red" 
            style={{fill: 'none'}} />
        </Sparklines>
        <Sparklines 
          min={0} 
          height={50} 
          width={100} 
          max={dataMax} 
          data={location2.scores}>
          <SparklinesLine 
            color="blue" 
            style={{fill: 'none'}} />
        </Sparklines>
      </div>
      <div className="chartNav">
        <h5>{location1.district}<div className="district1key"></div></h5>
        <h5>{location2.district}<div className="district2key"></div></h5>
        <Button 
          name="Close" 
          type="chart-close" 
          chartStatus={props.chartStatus} />
      </div>
      <ul>
        {mappedDates}
      </ul>
    </div>
  );
};

export default Chart;