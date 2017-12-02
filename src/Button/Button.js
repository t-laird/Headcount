import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  return (
    <button 
      className={props.type}
      onClick={() => {
        props.populateData(props.data); 
        props.displayDataLabel(props.type);
        console.log(this)
        // e.target.class = `${props.type} active`
        }}>
      {props.name}
    </button>
  )
}

Button.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  name: PropTypes.string,
  populateData: PropTypes.func,
  displayDataLabel: PropTypes.func
};

export default Button;