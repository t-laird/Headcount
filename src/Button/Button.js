import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button 
      className={props.buttonClass}
      onClick={() => {
        !props.chartStatus 
          ? props.changeData(props.type, props.data) 
          : props.chartStatus(false);
      }}>
      <i className={props.icon}></i>{props.name}
    </button>
  );
};

Button.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  name: PropTypes.string,
  changeData: PropTypes.func,
  chartStatus: PropTypes.func,
  buttonClass: PropTypes.string
};

export default Button;