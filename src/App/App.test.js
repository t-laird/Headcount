import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App test', () => {
  it('should render the correct components', () => {
    const renderedApp = shallow(<App />);
    expect(renderedApp.find('Header').length).toEqual(1);
    expect(renderedApp.find('Search').length).toEqual(1);
    expect(renderedApp.find('ComparisonContainer').length).toEqual(1);
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  })

  it('should match the App snapshot', () => {
    const renderedApp = shallow(<App />);
    expect(renderedApp).toMatchSnapshot();
  })
});