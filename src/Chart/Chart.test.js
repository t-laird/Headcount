/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import { shallow, mount } from 'enzyme';

describe('Chart test', () => {
  let mockFunc;
  let renderedChart;
  let mockData;

  beforeEach(() => {
    mockFunc = jest.fn();
    mockData = [{'Colorado': {2005: 0.351, 2006: 0.619, 2007: 0.814}}, {'ACADEMY 20': {2005: 0.123, 2006: 0.234, 2007: 0.345}}];
    renderedChart = shallow(<Chart comparisons={['Colorado', 'ACADEMY 20']} chartStatus={mockFunc} cards={mockData} />);
  });

  it('should render the correct chart elements', () => {
    expect(renderedChart.find('Sparklines').length).toEqual(2);
    expect(renderedChart.find('ul').length).toEqual(1);
    expect(renderedChart.find('li').length).toEqual(3)
    expect(renderedChart.find('Button').length).toEqual(1);
    expect(renderedChart.find('.axis').length).toEqual(1);
    expect(renderedChart.find('span').length).toEqual(2);
  });
  
  it('should render the correct number of li components for the x-axis given more or less data', () => {
    const largerMockData = [{'Colorado': {2005: 0.351, 2006: 0.619, 2007: 0.814, 2008: 0.999}}, {'ACADEMY 20': {2005: 0.123, 2006: 0.234, 2007: 0.345, 2008: 0.955}}];
    renderedChart = shallow(<Chart comparisons={['Colorado', 'ACADEMY 20']} chartStatus={mockFunc} cards={largerMockData} />);
    expect(renderedChart.find('li').length).toEqual(4);
  });

  it('Should match the snapshot', () => {
    expect(renderedChart).toMatchSnapshot();
  });
  
  it('should adjust the y-axis to accomodate larger data when necessary', () => {
    const largerMockData = [{'Colorado': {2005: 351, 2006: 619, 2007: 814, 2008: 999}}, {'ACADEMY 20': {2005: 123, 2006: 234, 2007: 345, 2008: 955}}];
    renderedChart = shallow(<Chart comparisons={['Colorado', 'ACADEMY 20']} chartStatus={mockFunc} cards={largerMockData} />);
    
    expect(renderedChart.find('span').first().text()).toEqual("0");
    expect(renderedChart.find('span').last().text()).toEqual("999");
  });
});