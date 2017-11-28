import React from 'react';
import './Styles/ComparisonContainer.css';
import Card from './Card';

function ComparisonContainer (props) {
  return (
    <div className="ComparisonContainer">
      <h3>Click Two Cards to Compare the School Districts</h3>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ComparisonContainer;