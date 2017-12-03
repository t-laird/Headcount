/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { shallow, mount } from 'enzyme';

describe('Button test', () => {
  it('should render the correctly in Nav', () => {
    const mockFunc = jest.fn();

    const renderedButton = shallow(
      <Button
        icon='icon-child'
        type='kinderData' 
        changeData={mockFunc}
        name='Kindergartens in full day programs'
        data={[]}/>); 

    expect(renderedButton.find('.kinderData').length).toEqual(1);
    expect(renderedButton.find('i').length).toEqual(1);
  });

  it('should render the correctly in Chart', () => {
    const mockFunc = jest.fn();

    const renderedButton = shallow(
      <Button 
        type='chart-close'
        chartStatus={mockFunc}
        name='Close' />);

    expect(renderedButton.find('.chart-close').length).toEqual(1);
  });

  it('should match the Button snapshot', () => {
    const mockFunc = jest.fn();

    const renderedButton = shallow(
      <Button 
        icon='icon-child'
        type='kinderData' 
        changeData={mockFunc}
        name='Kindergartens in full day programs'
        data={[]}/>);

    expect(renderedButton).toMatchSnapshot();
  });

  it('Should display the correct label based on props in Nav', () => {
    const mockFunc = jest.fn();

    const renderedButton = shallow(
      <Button 
        icon='icon-child'
        type='kinderData' 
        changeData={mockFunc}
        name='Kindergarteners in full day programs'
        data={[]}/>);
    expect(renderedButton.text()).toEqual('Kindergarteners in full day programs')
  });

  it('Should display the correct label based on props in Chart', () => {
    const mockFunc = jest.fn();

    const renderedButton = shallow(
      <Button 
        type='chart-close'
        chartStatus={mockFunc}
        name='Close' />);

    expect(renderedButton.text()).toEqual('Close')
  });

  it('should call the correct method passed from props in the onClick when inside Nav', () => {
    const mockFunc = jest.fn();

    const mockFunc2 = jest.fn();

    const renderedButton = shallow(
      <Button 
        icon='icon-child'
        type='kinderData' 
        changeData={mockFunc}
        name='Kindergartens in full day programs'
        data={[]}/>);

    renderedButton.simulate('click');
    expect(mockFunc.mock.calls.length).toEqual(1);
    expect(mockFunc2.mock.calls.length).toEqual(0);
  });

  it('should call the correct method passed from props in the onClick when inside Chart', () => {
    const mockFunc = jest.fn();

    const mockFunc2 = jest.fn();

    const renderedButton = shallow(
      <Button 
        type='chart-close'
        chartStatus={mockFunc2}
        name='Close' />);

    renderedButton.simulate('click');
    expect(mockFunc.mock.calls.length).toEqual(0);
    expect(mockFunc2.mock.calls.length).toEqual(1);
  });
});
