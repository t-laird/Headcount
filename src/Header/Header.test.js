import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow, mount } from 'enzyme';

describe('Header test', () => {
  it('should render the correct components', () => {
    const renderedHeader = shallow(<Header />);
    expect(renderedHeader.find('.Header').length).toEqual(1);
    expect(renderedHeader.find('h1').length).toEqual(1);
  })

  it('should match the Header snapshot', () => {
    const renderedHeader = shallow(<Header />);
    expect(renderedHeader).toMatchSnapshot();
  })
});