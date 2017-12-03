import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';
import './Nav.css';

import gradData from '../../data/high_school_graduation_rates.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import onlineEnrollment from '../../data/online_pupil_enrollment.js';
import householdIncome from '../../data/median_household_income.js';
import enrollment from '../../data/pupil_enrollment.js';
import remediationInHigherEducation from '../../data/remediation_in_higher_education.js';
import studentsInPoverty from '../../data/school_aged_children_in_poverty.js';
import specialEducation from '../../data/special_education.js';
import titleIstudents from '../../data/title_i_students.js';


const Nav = (props) => {
  return (
    <div className='Nav'>
      <Button
        icon='icon-child'
        changeData={props.changeData}
        type='kinderData'
        name={props.dataDescriptions.kinderData} 
        data={kinderData}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-graduation-cap'
        changeData={props.changeData}
        type='gradData'
        name={props.dataDescriptions.gradData} 
        data={gradData}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-pencil'
        changeData={props.changeData}
        type='enrollment'
        name={props.dataDescriptions.enrollment} 
        data={enrollment}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-laptop'
        changeData={props.changeData}
        type='onlineEnrollment'
        name={props.dataDescriptions.onlineEnrollment} 
        data={onlineEnrollment}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-dollar'
        changeData={props.changeData}
        type='householdIncome' 
        name={props.dataDescriptions.householdIncome} 
        data={householdIncome}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-traffic-cone'
        changeData={props.changeData}
        type='studentsInPoverty'
        name={props.dataDescriptions.studentsInPoverty}  
        data={studentsInPoverty}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-doc-text'
        changeData={props.changeData}
        type='titleIstudents' 
        name={props.dataDescriptions.titleIstudents} 
        data={titleIstudents}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-handshake-o'
        changeData={props.changeData}
        type='specialEducation'
        name={props.dataDescriptions.specialEducation}  
        data={specialEducation}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        icon='icon-ccw'
        changeData={props.changeData}
        type='remediationInHigherEducation'
        name={props.dataDescriptions.remediationInHigherEducation}  
        data={remediationInHigherEducation}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
    </div>
  );
};

Nav.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  name: PropTypes.string,
  populateData: PropTypes.func,
  displayDataLabel: PropTypes.func
};

export default Nav;