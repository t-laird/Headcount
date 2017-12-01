import React from 'react';
import Button from '../Button/Button.js';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <h1>HeadCount 2 <span>dot</span> 0</h1>
      <Button populateData={props.populateData}/>
    </div>
  );
};

export default Header;