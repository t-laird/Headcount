import React from 'react';
import './ComparisonContainer.css';
import Card from '../Card/Card';

const ComparisonContainer = (props) => {
  return (
    <div className="ComparisonContainer">
      <h3>Click Two Cards to Compare the School Districts</h3>
      <Card type="Card Comparison" data={{}}/>
      <Card type="Card Comparison" data={{}}/>
      <Card type="Card Comparison" data={{}}/>
    </div>
  );
}

export default ComparisonContainer;