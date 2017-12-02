import React from 'react';
import Button from '../Button/Button.js';
import './Header.css';

import gradData from '../../data/high_school_graduation_rates.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import onlineEnrollment from '../../data/online_pupil_enrollment.js';
import householdIncome from '../../data/median_household_income.js';
import enrollment from '../../data/pupil_enrollment.js';
import remediationInHigherEducation from '../../data/remediation_in_higher_education.js';
import studentsInPoverty from '../../data/school_aged_children_in_poverty.js';
import specialEducation from '../../data/special_education.js';
import titleIstudents from '../../data/title_i_students.js';


const Header = (props) => {
  return (
    <div className='Header'>
      <h1>HeadCount 2 <span>dot</span> 0</h1>
      <div className='button-wrapper'>
        <Button
          type='gradData' 
          data={gradData}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='kinderData' 
          data={kinderData}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='onlineEnrollment' 
          data={onlineEnrollment}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='householdIncome' 
          data={householdIncome}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='enrollment' 
          data={enrollment}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='remediationInHigherEducation' 
          data={remediationInHigherEducation}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='studentsInPoverty' 
          data={studentsInPoverty}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='specialEducation' 
          data={specialEducation}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
        <Button
          type='titleIstudents' 
          data={titleIstudents}
          populateData={props.populateData}
          displayDataLabel={props.displayDataLabel}/>
      </div>
    </div>
  );
};

export default Header;