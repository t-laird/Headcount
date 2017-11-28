import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer test', () => {
  it('should render the correct components', () => {
    const renderedCardContainer = shallow(<CardContainer cards={[]}/>);
    expect(renderedCardContainer.find('.CardContainer').length).toEqual(1);
  })

  it('should match the CardContainer snapshot', () => {
    const renderedCardContainer = shallow(<CardContainer cards={[]}/>);
    expect(renderedCardContainer).toMatchSnapshot();
  })
});
