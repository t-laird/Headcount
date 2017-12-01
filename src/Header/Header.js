import React from 'react';
import Button from '../Button/Button.js';
import './Header.css';
import gradData from '../../data/high_school_graduation_rates.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


const Header = (props) => {
  return (
    <div className='Header'>
      <h1>HeadCount 2 <span>dot</span> 0</h1>
      <Button
        type='gradData' 
        data={gradData}
        populateData={props.populateData}/>
      <Button
      type='kinderData' 
      data={kinderData}
      populateData={props.populateData}/>
      
    </div>
  );
};

export default Header;