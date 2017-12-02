import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  return (
    <button 
      className={props.type}
      onClick={() => {
        if (!props.chartStatus) {
          props.changeData(props.type, props.data);
        } else {
          props.chartStatus(false);
        }
      }}>
      <i className={props.icon}></i> {props.name}
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