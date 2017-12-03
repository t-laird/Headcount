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
  const dataFiles = 
    [kinderData, 
    gradData, 
    enrollment, 
    onlineEnrollment, 
    householdIncome, 
    studentsInPoverty,
    titleIstudents,
    specialEducation,
    remediationInHigherEducation];

  const icons = 
    ['icon-child', 
    'icon-graduation-cap', 
    'icon-pencil', 
    'icon-laptop', 
    'icon-dollar', 
    'icon-traffic-cone', 
    'icon-doc-text', 
    'icon-handshake-o', 
    'icon-ccw'];

  const dataTypes = Object.keys(props.dataDescriptions);

  const mappedButtons = dataTypes.map((type, index) => {
    return (
      <Button
        key={`button-${index}`}
        icon={icons[index]}
        type={dataTypes[index]}
        changeData={props.changeData}
        name={props.dataDescriptions[type]} 
        data={dataFiles[index]} />
    )
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
  data: PropTypes.array,
  icon: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  changeData: PropTypes.func
};

export default Nav;