import React from 'react';
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
        type='kinderData'
        name='Full-day kindergarteners' 
        data={kinderData}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='gradData'
        name='High-school graduation rates' 
        data={gradData}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='enrollment'
        name='Total enrollment' 
        data={enrollment}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='onlineEnrollment'
        name='Online enrollment' 
        data={onlineEnrollment}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='householdIncome'
        name='Median household income' 
        data={householdIncome}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='studentsInPoverty'
        name='Student in poverty' 
        data={studentsInPoverty}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='titleIstudents'
        name='Title I student' 
        data={titleIstudents}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='specialEducation'
        name='Students in special-education' 
        data={specialEducation}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
      <Button
        type='remediationInHigherEducation'
        name='Remediation in higher education' 
        data={remediationInHigherEducation}
        populateData={props.populateData}
        displayDataLabel={props.displayDataLabel}/>
    </div>
  );
};

export default Nav;