import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer test', () => {
  it('should render the correct components', () => {
    const renderedCardContainer = shallow(<CardContainer type='CardContainer' data={[]}/>);
    expect(renderedCardContainer.find('h4').length).toEqual(1);
    expect(renderedCardContainer.find('ul').length).toEqual(1);
    expect(renderedCardContainer.find('.CardContainer').length).toEqual(1);
  })

  it('should match the CardContainer snapshot', () => {
    const renderedCardContainer = shallow(<CardContainer type='CardContainer' data={[]}/>);
    expect(renderedCardContainer).toMatchSnapshot();
  })
});
