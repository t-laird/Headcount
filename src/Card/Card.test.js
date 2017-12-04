/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card test', () => {
  it('should render the correct', () => {
    const renderedCard = shallow(
      <Card 
        type='Card' 
        district="Colorado" 
        data={{}}/>);

    expect(renderedCard.find('h4').length).toEqual(1);
    expect(renderedCard.find('ul').length).toEqual(1);
    expect(renderedCard.find('.Card').length).toEqual(1);
  });

  it('should match the Card snapshot', () => {
    const renderedCard = shallow(
      <Card 
        type='Card' 
        data={{}}/>);

    expect(renderedCard).toMatchSnapshot();
  });

  it('should render the correct', () => {
    const renderedCard = shallow(
      <Card 
        type='Card compared' 
        data={{}}/>);

    expect(renderedCard.find('h1').length).toEqual(1);
    expect(renderedCard.find('h4').length).toEqual(0);
    expect(renderedCard.find('ul').length).toEqual(0);
  });

  it('should render the correct', () => {
    const renderedCard = shallow(
      <Card type='Card displayComparedData'
        data={{}}
        district1="Colorado" 
        district2='ADAMS COUNTY 14' 
        compareData={{}}/>);

    expect(renderedCard.find('h3').length).toEqual(3);
    expect(renderedCard.find('h4').length).toEqual(0);
    expect(renderedCard.find('ul').length).toEqual(0);
  });

  it('should call the method passed from props in the onClick', () => {
    const mockFunc = jest.fn();

    const renderedCard = shallow(
      <Card 
        type='Card' 
        district="Colorado" 
        selectCard={mockFunc} data={{}}/>);

    const cardDiv = renderedCard.find('.card-content');

    cardDiv.simulate('click');
    expect(mockFunc.mock.calls.length).toEqual(1);
  });
});
