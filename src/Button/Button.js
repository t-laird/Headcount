import React from 'react';
// import gradData from '../../data/high_school_graduation_rates.js';
// import kinderData from '../../data/kindergartners_in_full_day_program.js';


const Button = (props) => {
  return (
    <button 
      className={props.type}
      onClick={() => {props.populateData(props.data)}}>
      show {props.type}
    </button>
  )
}

export default Button;