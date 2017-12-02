import React from 'react';

const Button = (props) => {
  return (
    <button 
      className={props.type}
      onClick={() => {props.populateData(props.data); props.displayDataLabel(props.type)}}>
      {props.name}
    </button>
  )
}

export default Button;