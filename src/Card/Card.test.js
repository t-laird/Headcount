import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card test', () => {
  it('should render the correct components', () => {
    const renderedCard = shallow(<Card type='Card' data={[]}/>);
    expect(renderedCard.find('h4').length).toEqual(1);
    expect(renderedCard.find('ul').length).toEqual(1);
    expect(renderedCard.find('.Card').length).toEqual(1);
  })

  it('should match the Card snapshot', () => {
    const renderedCard = shallow(<Card type='Card' data={[]}/>);
    expect(renderedCard).toMatchSnapshot();
  })
});
