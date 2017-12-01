import React from 'react';
import gradData from '../../data/high_school_graduation_rates.js';

const Button = (props) => { 
  return (
    <button 
      className='grad'
      onClick={() => {props.populateData(gradData)}}>
      graduation rates
    </button>
  )
}

export default Button;