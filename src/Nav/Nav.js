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
  const navData = {
    kinderData: {file: kinderData, icon: 'icon-child'},
    gradData: {file: gradData, icon: 'icon-graduation-cap'},
    enrollment: {file: enrollment, icon: 'icon-pencil'},
    onlineEnrollment: {file: onlineEnrollment, icon: 'icon-laptop'},
    householdIncome: {file: householdIncome, icon: 'icon-dollar'},
    studentsInPoverty: {file: studentsInPoverty, icon: 'icon-traffic-cone'},
    titleIstudents: {file: titleIstudents, icon: 'icon-doc-text'},
    specialEducation: {file: specialEducation, icon: 'icon-handshake-o'},
    remediationInHigherEducation: {file: remediationInHigherEducation, icon: 'icon-ccw'}
  };

  const dataTypes = Object.keys(props.dataDescriptions);

  const mappedButtons = dataTypes.map((type, index) => {
    const buttonClass = props.currentData === props.dataDescriptions[type] 
      ? `${type} selected` 
      : type;

    return (
      <Button
        type={type}
        key={`button-${index}`}
        buttonClass={buttonClass}
        icon={navData[type].icon}
        data={navData[type].file}
        changeData={props.changeData}
        name={props.dataDescriptions[type]} />        
    );
  });

  return (
    <div className='Nav'>
      {
        mappedButtons
      }
    </div>
  );
};

Nav.propTypes = {
  changeData: PropTypes.func,
  currentData: PropTypes.string,
  dataDescriptions: PropTypes.object
};

export default Nav;