/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow, mount } from 'enzyme';

describe('Nav test', () => {
  it('should render a Nav wrapper', () => {
    const dataDescriptions = {
      kinderData: 'Kindergartners in full day programs', 
      gradData: 'High-school graduation rates',
      enrollment: 'Student enrollment',
      onlineEnrollment: 'Online student enrollment',
      householdIncome: 'Median household income',
      studentsInPoverty: 'School aged children in poverty',
      titleIstudents: 'Students qualifying for Title I',
      specialEducation: 'Students in special education programs',
      remediationInHigherEducation: 'Remediation in higher education'
    };
   
    const renderedNav = shallow(<Nav dataDescriptions={dataDescriptions} />);

    expect(renderedNav.find('.Nav').length).toEqual(1);
  });

  it('should render the correct amount of buttons', () => {
    const mockFunc = jest.fn();

    const dataDescriptions = {
      kinderData: 'Kindergartners in full day programs', 
      gradData: 'High-school graduation rates',
      enrollment: 'Student enrollment',
      onlineEnrollment: 'Online student enrollment',
      householdIncome: 'Median household income',
      studentsInPoverty: 'School aged children in poverty',
      titleIstudents: 'Students qualifying for Title I',
      specialEducation: 'Students in special education programs',
      remediationInHigherEducation: 'Remediation in higher education'
    };

    const renderedNav = mount(
      <Nav 
        dataDescriptions={dataDescriptions}
        changeData={mockFunc}
        currentData={'Kindergartners in full day programs'}/>);

    expect(renderedNav.find('button').length).toEqual(9);
  });

  it('should match the Nav Snapshot', () => {
    const mockFunc = jest.fn();

    const dataDescriptions = {
      kinderData: 'Kindergartners in full day programs', 
      gradData: 'High-school graduation rates',
      enrollment: 'Student enrollment',
      onlineEnrollment: 'Online student enrollment',
      householdIncome: 'Median household income',
      studentsInPoverty: 'School aged children in poverty',
      titleIstudents: 'Students qualifying for Title I',
      specialEducation: 'Students in special education programs',
      remediationInHigherEducation: 'Remediation in higher education'
    };

    const renderedNav = shallow(
      <Nav 
        dataDescriptions={dataDescriptions}
        changeData={mockFunc}
        currentData={'Kindergartners in full day programs'}/>);

    expect(renderedNav).toMatchSnapshot();
  })
});