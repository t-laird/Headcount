/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import DistrictRepository from '../helper.js';
import { shallow, mount } from 'enzyme';

const helperData = new DistrictRepository([]);

describe('Nav test', () => {
  it('should render a Nav wrapper', () => {
    const renderedNav = shallow(<Nav dataDescriptions={helperData.dataDescriptions} />);

    expect(renderedNav.find('.Nav').length).toEqual(1);
  });

  it('should render the correct amount of buttons', () => {
    const mockFunc = jest.fn();
    
    const renderedNav = mount(
      <Nav 
        dataDescriptions={helperData.dataDescriptions}
        changeData={mockFunc}
        currentData={'Kindergartners in full day programs'}/>);

    expect(renderedNav.find('button').length).toEqual(9);
  });

  it('should match the Nav Snapshot', () => {
    const mockFunc = jest.fn();

    const renderedNav = shallow(
      <Nav 
        dataDescriptions={helperData.dataDescriptions}
        changeData={mockFunc}
        currentData={'Kindergartners in full day programs'}/>);

    expect(renderedNav).toMatchSnapshot();
  })
});