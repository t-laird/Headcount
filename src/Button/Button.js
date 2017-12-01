import React from 'react';

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